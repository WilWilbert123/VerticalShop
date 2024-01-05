import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '../components/ThemeContext';
import GlobalTheme from '../components/GlobalTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, FlatList, TouchableOpacity,Modal } from 'react-native';
import ThemeToggle from '../components/ThemeToggle';

const Tab = createMaterialTopTabNavigator();

const TabScreen = ({ savedItems, status, tabStyles }) => {
  const filteredItems = savedItems.filter(item => item.status === status);
  const renderSavedItem = ({ item }) => (
    <View style={tabStyles.savedItemContainer}>
      <Text style={tabStyles.savedItemText}>{item.name}</Text>
      <Text style={tabStyles.savedItemQuantity}>Quantity: {item.quantity || 1}</Text>
      {item.price !== undefined && (
        <>
          <Text style={tabStyles.savedItemPrice}>Price per item: ${item.price.toFixed(2)}</Text>
          <Text style={tabStyles.savedItemTotalPrice}>
            Total Price: ${(item.price || 0) * (item.quantity || 1)}
          </Text>
        </>
      )}
    </View>
  );
  

  return (
    <View style={tabStyles.SavedItemsContainer}>
      {filteredItems.length === 0 ? (
        <Text style={tabStyles.noSavedItemsText}>No {status.toLowerCase()} items found</Text>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderSavedItem}
        />
      )}
    </View>
  );
};

const SavedItemsScreen = ({navigation}) => {
  const { isDarkMode } = useTheme();
  const styles = GlobalTheme(isDarkMode);
  const [savedItems, setSavedItems] = useState([]);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);

  const handleGoback = () => {
    navigation.navigate("HomeScreen",{
      screen: 'MyCart',
    });
};
const handleCancelOrder = () => {
  // Show the confirmation modal
  setIsCancelModalVisible(true);
};
  
  const handleConfirmCancelOrder = async () => {
    try {
      // Delete the saved items from AsyncStorage
      await AsyncStorage.removeItem('savedItems');
      // Clear the state to update the UI
      setSavedItems([]);
      console.log('Order Cancelled. Saved items deleted.');
      // Close the modal after confirming the cancellation
      setIsCancelModalVisible(false);
    } catch (error) {
      console.error('Error deleting saved items from AsyncStorage:', error);
    }
  };

  const handleCancelModalClose = () => {
    // Close the modal without cancelling the order
    setIsCancelModalVisible(false);
  };
  const fetchSavedItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('savedItems');
      if (storedItems) {
        setSavedItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error retrieving saved items from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    fetchSavedItems();
  }, []);

  const tabStyles = styles; // Use the same styles for now, you can customize it as needed


  const toPayTabStyles = {
    savedItemContainer: {
      backgroundColor: styles.backGroundSaveItems.backgroundColor,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    
    },
  };

  Object.assign(tabStyles, toPayTabStyles);

  return (
    <View style={{ flex: 1 }}>
      <ThemeToggle />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarScrollEnabled: true,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarItemStyle: {
            width: 'auto',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            marginHorizontal: 5,
          },
          tabBarIndicatorStyle: {
            backgroundColor: tabStyles.TopTabContainer,
            height: 3,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginTop: 38,
          },
          
        })}
      >
        <Tab.Screen name="To Pay">
          {() => <TabScreen savedItems={savedItems} status="To Pay" tabStyles={tabStyles} />}
        </Tab.Screen>
        <Tab.Screen name="To Ship">
          {() => <TabScreen savedItems={savedItems} status="To Ship" tabStyles={tabStyles} />}
        </Tab.Screen>
        <Tab.Screen name="To Receive">
          {() => <TabScreen savedItems={savedItems} status="To Receive" tabStyles={tabStyles} />}
        </Tab.Screen>
        <Tab.Screen name="Complete">
          {() => <TabScreen savedItems={savedItems} status="Complete" tabStyles={tabStyles} />}
        </Tab.Screen>
        <Tab.Screen name="Cancelled">
          {() => <TabScreen savedItems={savedItems} status="Cancelled" tabStyles={tabStyles} />}
        </Tab.Screen>
        <Tab.Screen name="Return Refund">
          {() => <TabScreen savedItems={savedItems} status="Return Refund" tabStyles={tabStyles} />}
        </Tab.Screen>
      </Tab.Navigator>
      {/* Bottom Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={[styles.bottomButton, { backgroundColor: '#007BFF' }]}
          onPress={handleGoback}
        >
          <Text style={styles.bottomButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, { backgroundColor: '#DC3545' }]}
          onPress={handleCancelOrder}
        >
          <Text style={styles.bottomButtonText}>Cancel Order</Text>
        </TouchableOpacity>
      </View>

      {/* Cancel Order Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCancelModalVisible}
        onRequestClose={handleCancelModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to cancel the order?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleConfirmCancelOrder}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCancelModalClose}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SavedItemsScreen;
