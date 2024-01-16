import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Modal, Image, ScrollView, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import GlobalTheme from '../components/GlobalTheme';
import { useTheme } from '../components/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataComponent from '../data/DataComponent';
import { Rating } from 'react-native-ratings';

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const styles = GlobalTheme(isDarkMode);
  const [selectedTab, setSelectedTab] = useState('Home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [activitySearchText, setActivitySearchText] = useState('');
  const [filteredActivityData, setFilteredActivityData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const { sampleData, activityData, carouselData } = DataComponent();
  const [gridKey, setGridKey] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState(['All']); // Start with 'All' selected
  const [isSortSelected, setIsSortSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const categories = ['All', 'Food', 'Car', 'Clothes', 'House', 'Things', 'Animal', "Plants", "Watch"]; // Add your categories here
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      let updatedCategories;

      // If 'All' is selected, only keep 'All'
      if (category === 'All') {
        updatedCategories = ['All'];
      } else {
        // If the selected category is already selected, deselect it
        if (prevCategories.includes(category)) {
          updatedCategories = prevCategories.filter((c) => c !== category);
        } else {
          // If the selected category is not selected, select it
          // and remove 'All' if it's present in the categories
          updatedCategories = [...prevCategories, category].filter((c) => c !== 'All');
        }
      }

      setSearchText(''); // Clear search text when changing categories
      return updatedCategories;
    });
  };

  useEffect(() => {
    // Filter data based on the search text and selected categories
    const filtered = sampleData.filter(item =>
      (item.name.toLowerCase().includes(searchText.toLowerCase()) && (selectedCategories.includes('All') || selectedCategories.includes(item.category)))
    );
    setFilteredData(filtered);
  }, [searchText, selectedCategories]);
  useEffect(() => {
    // Filter data based on the search text
    const filtered = sampleData.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText]);
  useEffect(() => {
    // Filter activity data based on the search text
    const filteredActivity = activityData.filter(item =>
      item.name.toLowerCase().includes(activitySearchText.toLowerCase())
    );
    setFilteredActivityData(filteredActivity);
  }, [activitySearchText]);
  useEffect(() => {
    // Retrieve cart items from AsyncStorage when the component mounts
    const fetchCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error retrieving cart items from AsyncStorage:', error);
      }
    };

    fetchCartItems();
  }, []);

  const switchTab = (tab) => {
    setSelectedTab(tab);
  };
  const toggleCheckbox = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems.includes(item.id);
      if (isSelected) {
        // Remove the item ID from selected items
        return prevSelectedItems.filter((selectedItem) => selectedItem !== item.id);
      } else {
        // Add the item ID to selected items
        return [...prevSelectedItems, item.id];
      }
    });
  };


  // const renderListItem = ({ item }) => (
  //   <View style={styles.listItemContainer}>
  //     <TouchableOpacity onPress={() => handleItemClick(item)}>
  //       {/* Use the Image component to display the image */}
  //       <Image source={{ uri: item.image }} style={styles.itemImage} />
  //       <Text style={styles.listItem}>{item.name}</Text>
  //     </TouchableOpacity>
  //     <View style={styles.addToCartContainer}>
  //       <TouchableOpacity onPress={() => addToCart(item)}>
  //         <Ionicons name="cart" size={24} color="green" style={styles.addToCartIcon} />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
  const renderListItemActivity = ({ item }) => (
    <View style={styles.listItemContainer}>
      <TouchableOpacity onPress={() => handleItemClick(item)}>
        {/* Use the Image component to display the image */}
        <Text style={styles.listItem}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  const calculateTotal = () => {
    // Filter cart items based on selected items
    const selectedCartItems = cartItems.filter((item) => selectedItems.includes(item.id));

    // Calculate total price based on selected items
    let totalPrice = 0;
    for (const item of selectedCartItems) {
      totalPrice += (item.price || 0) * (item.quantity || 0);
    }
    return totalPrice.toFixed(2);
  };
  // Inside the component where you perform checkout

  const handleCheckout = async () => {
    try {
      // Check if there are selected items
      if (selectedItems.length === 0) {
        Alert.alert('No Items Selected', 'Please select items to checkout.');
        return;
      }

      // Display a confirmation modal
      Alert.alert(
        'Confirm Checkout',
        'Are you sure you want to buy these items?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: async () => {
              // Filter out selected items from the cart
              const itemsToMove = cartItems.filter((item) => selectedItems.includes(item.id));

              // Save the selected items with "To Pay" status
              const itemsToPay = itemsToMove.map((item) => ({
                ...item,
                status: 'To Pay',
                quantity: item.quantity || 1,
                totalPrice: (item.price || 0) * (item.quantity || 1),
              }));
              await AsyncStorage.setItem('savedItems', JSON.stringify(itemsToPay));
              console.log('Saved items to AsyncStorage successfully');

              // Remove the selected items from the cart
              const updatedCartItems = cartItems.filter((item) => !selectedItems.includes(item.id));
              setCartItems(updatedCartItems);

              // Save the updated cart items to AsyncStorage
              await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
              console.log('Updated cart items saved to AsyncStorage successfully');

              // Reset selected items
              setSelectedItems([]);

              // Navigate to the SavedItemsScreen
              navigation.replace('SavedItemsScreen', { initialTab: 'To Pay' });
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const addToCart = async (item) => {
    console.log('Adding to cart:', item);

    // Check if the item is already in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      // If the item is already in the cart, update the quantity and total price
      existingCartItem.quantity = (existingCartItem.quantity || 0) + 1;
      existingCartItem.totalPrice = (existingCartItem.price || 0) * existingCartItem.quantity;

      // Trigger a state update
      setCartItems([...cartItems]);
    } else {
      // If the item is not in the cart, add it as a new item with quantity 1
      const newCartItem = {
        ...item,
        quantity: 1,
        totalPrice: (item.price || 0), // Initial total price
      };
      const newCartItems = [...cartItems, newCartItem];
      console.log('New Cart Items:', newCartItems);
      setCartItems(newCartItems);
    }

    // Save the updated cart items to AsyncStorage
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('Saved to AsyncStorage successfully');
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };

  const handleSortByPrice = () => {
    const sortedData = [...sampleData].sort((a, b) => a.price - b.price);
    setFilteredData(sortedData);
  };

  const handleSortToggle = () => {
    if (isSortSelected) {
      // If already sorted, unsort the data
      setFilteredData(sampleData);
    } else {
      // If not sorted, sort the data
      handleSortByPrice();
    }

    // Toggle the sorting state
    setIsSortSelected((prev) => !prev);
  };


  const deleteCartItem = async (itemToDelete) => {
    // Find the item in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToDelete.id);

    if (existingCartItem) {
      // If the item is found, decrement its quantity
      existingCartItem.quantity -= 1;
      existingCartItem.totalPrice = (existingCartItem.totalPrice || 0) - existingCartItem.price; // Update total price

      // Remove items with quantity less than or equal to 0
      const filteredCartItems = cartItems.filter((cartItem) => cartItem.quantity > 0);
      setCartItems(filteredCartItems);

      // Save the updated cart items to AsyncStorage
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
        console.log('Deleted and saved to AsyncStorage successfully');
      } catch (error) {
        console.error('Error saving to AsyncStorage:', error);
      }
    }
  };
  const deleteCartItemRegardlessOfQuantity = async (itemToDelete) => {
    // Remove the item from the cart, regardless of quantity
    const filteredCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);

    setCartItems(filteredCartItems);

    // Save the updated cart items to AsyncStorage
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
      console.log('Deleted and saved to AsyncStorage successfully');
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };


  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalContent(
      <View style={styles.modalContent}>
        <Image source={{ uri: item.image }} style={styles.modalImage} />
        <Text style={styles.modalText}>{item.about}</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <View style={styles.OkButtonContainer}>
          <Text style={styles.okButton}>OK</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

    setModalVisible(true);
  };
  

  const handleAccountTabItemClick = (tab) => {
    // Set the appropriate content for the modal based on the selected tab
    if (tab === 'Profile') {
      setModalContent(
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Profile Content</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.okButton}>OK</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (tab === 'Number') {
      setModalContent(
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Number Content</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.okButton}>OK</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (tab === 'Email') {
      setModalContent(
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Email Content</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.okButton}>OK</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (tab === 'Balance') {
      setModalContent(
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Balance Content</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.okButton}>OK</Text>
          </TouchableOpacity>
        </View>
      );
    }
    setModalVisible(true);
  };
  const renderGridItem = ({ item }) => (
    <View style={styles.gridItemContainer}>
      <TouchableOpacity onPress={() => handleItemClick(item)}>
        {/* Use the Image component to display the image */}
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.gridItemText}>{item.name}</Text>
        <Rating
  startingValue={4.5}
  imageSize={20}
  readonly={true}
  style={styles.rating}
/>
        <Text style={styles.gridItemPrice}>${item.price.toFixed(2)}</Text>
      </TouchableOpacity>
      <View style={styles.addToCartContainer}>
        <TouchableOpacity onPress={() => addToCart(item)}>
          <View style={styles.AddToCartContainer}>
            <Text style={styles.AddToCartText}>Add to cart</Text>
            <Ionicons name="cart" size={24} color="green" style={styles.addToCartIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.HomeContainer}>


      {/* Search Box */}
      {/* <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <View style={styles.categoryButtonsContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategories.includes(category) && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryChange(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View> */}
      {/* Sort Button */}

      {/* Bottom Navigation Tabs (Home, Activity, My Cart, Account) */}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Activity') {
              iconName = 'ios-list';
            } else if (route.name === 'MyCart') {
              iconName = 'cart';
            } else if (route.name === 'Account') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: styles.bottomTab,
          tabBarStyle: styles.bottomTabsContainer,

        })}
      >

        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {() => (
            <View>
              {/* Search Box */}
              <TextInput
                style={styles.searchBox}
                placeholder="Search..."
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
              />

              <View style={styles.categoryButtonsContainer}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoryButtonsContentContainer}
                >
                  {categories.map((category) => (
                    <TouchableOpacity
                      key={category}
                      style={[
                        styles.categoryButton,
                        selectedCategories.includes(category) && styles.selectedCategoryButton,
                      ]}
                      onPress={() => handleCategoryChange(category)}
                    >
                      <Text style={styles.categoryButtonText}>{category}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Sort Button */}
              <TouchableOpacity
                style={[
                  styles.sortButton,
                  isSortSelected ? styles.selectedSortButton : styles.unselectedSortButton,
                ]}
                onPress={handleSortToggle}
              >
                <Text style={styles.sortButtonText}>Sort by Price</Text>
              </TouchableOpacity>

              {filteredData.length === 0 ? (
                <Text style={styles.noDataText}>No data found</Text>
              ) : (
                <View style={styles.ItemsContainer}>
                  <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderGridItem}
                    numColumns={2}
                    key={gridKey} // Add the key prop
                  />

                </View>
              )}
            </View>
          )}
        </Tab.Screen>


        <Tab.Screen name="Activity"
          options={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTitleAlign: 'center',
          }}
        >
          {() => (
            <View>

              <FlatList
                data={filteredActivityData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderListItemActivity}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyCart"
          options={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('SavedItemsScreen')}
                style={{ marginRight: 16 }}
              >
                <Ionicons name="cart" size={30} color="green" />
              </TouchableOpacity>
            ),
          }}
        >
          {() => (
            <View style={styles.MyCartContainer}>
              <View style={styles.MyCartItemsContainer}>
                {cartItems.length === 0 ? (
                  // Display a message when no items in the cart
                  <Text style={styles.noItemsText}>No items in the cart</Text>
                ) : (
                  <FlatList
                    data={cartItems.slice().reverse()}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <View style={styles.cartItemContainer}>
                        <View style={styles.cartItemRow}>
                          {/* Checkbox button */}
                          <TouchableOpacity onPress={() => toggleCheckbox(item)}
                            style={{ marginLeft: -10, marginRight: 5 }}
                          >
                            <Ionicons
                              name={selectedItems.includes(item.id) ? 'checkbox-outline' : 'square-outline'}
                              size={24}
                              color={selectedItems.includes(item.id) ? 'black' : 'black'}
                            />
                          </TouchableOpacity>
                          {/* Display the image with width 60 and height 60 */}
                          <Image source={{ uri: item.image }} style={styles.MyCartImage} />
                          <View style={styles.MycartNameAndPrice}>
                            <Text style={styles.cartItemText}>{item.name}</Text>
                            {item.price !== undefined && item.quantity !== undefined && (
                              <Text style={styles.cartItemPrice}>${(item.quantity * item.price).toFixed(2)}</Text>
                            )}
                          </View>
                          <View style={styles.cartItemCountRow}>
                            <TouchableOpacity onPress={() => deleteCartItem(item)}>
                              <Ionicons name="remove" size={24} color="red" />
                            </TouchableOpacity>
                            <Text style={styles.cartItemCount}>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => addToCart(item)}>
                              <Ionicons name="add" size={24} color="green" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteCartItemRegardlessOfQuantity(item)}>
                              <Ionicons name="trash" size={24} color="red" style={styles.deleteIcon} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                )}
              </View>
              <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>Total Price: ${calculateTotal()}</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.checkoutButton,
                  {
                    opacity:
                      cartItems.length === 0 || selectedItems.length === 0 ? 0.5 : 1,
                  },
                ]}
                onPress={handleCheckout}
                disabled={cartItems.length === 0 || selectedItems.length === 0}
              >
                <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          )}
        </Tab.Screen>


        <Tab.Screen name="Account"
  options={{
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
  }}
>
  {() => (
    <View style={styles.accountTabContainer}>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Profile')}>
        <Text style={styles.accountTabItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Number')}>
        <Text style={styles.accountTabItemText}>Number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Email')}>
        <Text style={styles.accountTabItemText}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Balance')}>
        <Text style={styles.accountTabItemText}>Balance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Settings')}>
        <Text style={styles.accountTabItemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Security')}>
        <Text style={styles.accountTabItemText}>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountTabItem} onPress={() => handleAccountTabItemClick('Notifications')}>
        <Text style={styles.accountTabItemText}>Notifications</Text>
      </TouchableOpacity>
      {/* Add more touchable items for additional features as needed */}
    </View>
  )}
</Tab.Screen>

      </Tab.Navigator>

      {/* Render content based on selected tab */}

      {/* Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text style={styles.modalText}>{selectedItem ? selectedItem.name : ''}</Text>
            {/* <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.okButton}>OK</Text>
            </TouchableOpacity> */}
            {modalContent}
          </View>
        </View>
      </Modal>
    </View>

  );
};

export default HomeScreen;