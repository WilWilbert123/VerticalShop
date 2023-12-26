import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Modal, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import GlobalTheme from '../components/GlobalTheme';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../components/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataComponent from '../data/DataComponent';

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
  const { sampleData, activityData } = DataComponent();
  const [gridKey, setGridKey] = useState(0);
  
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
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += (item.price || 0) * (item.quantity || 0);
    }
    return totalPrice.toFixed(2);
  };
  const handleCheckout = () => {
    // Calculate the total price of items in the cart
    const totalPrice = calculateTotal();

    // Set the modal content with the total price
    setModalContent(
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Total: ${totalPrice}</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.okButton}>OK</Text>
        </TouchableOpacity>
      </View>
    );

    // Show the modal
    setModalVisible(true);
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
    <View style={styles.bottomTabScreen}>
    
      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    
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
      
        <Tab.Screen name="Home">
          {() => (
            <View>
              {filteredData.length === 0 ? (
                <Text style={styles.noDataText}>No data found</Text>
              ) : (
                <FlatList
                  data={filteredData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={renderGridItem}
                  numColumns={2}
                  key={gridKey} // Add the key prop
                />
              )}
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="Activity">
          {() => (
            <View>

              <FlatList
                data={filteredActivityData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderListItemActivity}
              />
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyCart">
  {() => (
    <View style={styles.MyCartContainer}>
      <FlatList
        data={cartItems.slice().reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <View style={styles.cartItemRow}>
              {/* Display the image with width 60 and height 60 */}
              <Image source={{ uri: item.image }} style={styles.MyCartImage} />
              <View style={styles.MycartNameAndPrice}>
                <Text style={styles.cartItemText}>{item.name}</Text>
                {item.price !== undefined && (
                  <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
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
              </View>
              <TouchableOpacity onPress={() => deleteCartItemRegardlessOfQuantity(item)}>
                <Ionicons name="trash" size={24} color="red" style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
  
  <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total Price: ${calculateTotal()}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  )}
</Tab.Screen>


        <Tab.Screen name="Account">
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
              {/* Add more touchable items as needed */}
            </View>
          )}
        </Tab.Screen>
      </Tab.Navigator>
     
      {/* Render content based on selected tab */}
      <ThemeToggle />

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