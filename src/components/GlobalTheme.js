// GlobalTheme.js
import { StyleSheet } from 'react-native';

const GlobalTheme = (isDarkMode) => {
  const colors = {
    white: '#ffffff',
    black: '#000000',
    gray: '#808080',
    darkGray: '#555555',
    lightGray: '#d3d3d3',
    red: '#ff0000',
    orange: '#ffa500',
    yellow: '#ffff00',
    green: '#008000',
    blue: '#0000ff',
    indigo: '#4b0082',
    violet: '#9400d3',

  };

  return StyleSheet.create({
    HomeContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.black : colors.white,
      marginTop: 40,
    },

    background: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.gray : colors.white,
    },

    searchBox: {
      flex: 0,
      backgroundColor: isDarkMode ? colors.white : colors.white,
      padding: 10,
      margin: 10,
      borderRadius: 8,
      color: isDarkMode ? colors.black : colors.black,
      borderWidth: 1,
      borderColor: "black"
    },
    activeTab: {
      color: isDarkMode ? colors.red : colors.black,
    },
    inactiveTab: {
      color: isDarkMode ? colors.darkGray : colors.darkGray,
    },
    bottomTabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: isDarkMode ? colors.black : colors.lightGray,
      padding: 5,
    },

    listItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderBottomColor: isDarkMode ? colors.white : colors.black,
      backgroundColor: isDarkMode ? colors.darkGray : colors.white,
      borderBottomWidth: 1,
    },

    gridItemText: {
      textAlign: 'center',
      fontSize: 18,
      color: isDarkMode ? colors.white : colors.black,
    },
    addToCartContainer: {
      borderWidth: 1,
      borderColor: isDarkMode ? colors.white : colors.black,
      width: 120,
      borderRadius: 10,
    },
    addToCartIcon: {
      marginLeft: 10,
    },
    cartItemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderBottomColor: isDarkMode ? colors.white : colors.black,
      marginBottom: -5,
    },
    cartItemContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 2,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? colors.white : colors.black,
      backgroundColor: isDarkMode ? colors.darkGray : colors.lightGray,
      color: isDarkMode ? colors.white : colors.black,

    },

    cartItemText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: isDarkMode ? colors.white : colors.black,
      fontSize: 18,
      marginLeft: 5,
      marginTop: 18,
    },
    deleteIcon: {
      marginLeft: 20,
    },
    cartItemCountRow: {
      flex: 1,
      position: "absolute",
      flexDirection: 'row',
      alignItems: 'center', // Align items in the center
      marginLeft: 'auto', // Move to the right side
      marginLeft: 235,
    },

    noDataText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
      color: 'red',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      padding: 40,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: colors.black,
      width: 200,
    },
    modalText: {
      fontSize: 18,
      color: colors.white,
      marginBottom: 10,
    },
    okButton: {
      textAlign: 'center',
      padding: 8,
      backgroundColor: colors.white,
      color: colors.black,
      fontSize: 16,
      width: 120,
    },
    accountTabContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    accountTabItem: {
      alignItems: "center",
      padding: 20,
      margin: 5,
      backgroundColor: isDarkMode ? colors.darkGray : colors.white,
      borderRadius: 8,
      width: 300,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.white : colors.black,
    },

    accountTabItemText: {
      fontSize: 18,
      color: isDarkMode ? colors.white : colors.black,
    },


    cartItemCount: {
      color: isDarkMode ? colors.white : colors.black,
      marginHorizontal: 8,
      fontSize: 18,
    },
    MyCartImage: {
      width: 70,
      height: 70,
      borderRadius: 5,
      marginRight: 10,
    },

    itemImage: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
    },

    gridItemContainer: {
      flex: 1,
      flexDirection: 'column',
      margin: 8,
      alignItems: 'center',
      backgroundColor: isDarkMode ? colors.black : colors.white,
      borderRadius: 8,
      padding: 16,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.white : colors.black,
      // Add any other styles you want for the grid item container
    },

    gridItemImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    AddToCartContainer: {
      flexDirection: 'row',
      justifyContent: "center",
    },
    AddToCartText: {
      marginTop: 3,
      fontWeight: "bold",
      color: isDarkMode ? colors.white : colors.black,
    },

    gridItemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? colors.red : colors.green,
      textAlign: 'center',
    },
    cartItemPrice: {
      textAlign: "center",
      color: isDarkMode ? colors.red : colors.green,
      justifyContent: "center",
    },
    totalPriceContainer: {
      position: 'absolute',
      bottom: 50, // Adjust this value to your preference
      backgroundColor: 'white',
      width: '100%',
      padding: 5,
      borderTopWidth: 1,
      borderTopColor: 'lightgray',
    },
    totalPriceText: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    checkoutButton: {
      // position: 'absolute',
      bottom: 0,
      backgroundColor: isDarkMode ? colors.green : colors.green,
      width: '100%',
      padding: 15,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: isDarkMode ? colors.white : colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    MyCartContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    categoryButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: isDarkMode ? colors.white : colors.white,  // Background color for the category buttons container

    },
    categoryButton: {
      marginLeft: 10,
      padding: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.black : colors.black,
      backgroundColor: isDarkMode ? colors.black : colors.white,  // Background color for unselected category buttons
    },
    selectedCategoryButton: {
      backgroundColor: 'green', // Background color for the selected category button
    },
    categoryButtonText: {
      color: isDarkMode ? colors.white : colors.black,  // Text color for category buttons
      fontWeight: 'bold',
    },
    sortButton: {
      backgroundColor: isDarkMode ? colors.black : colors.black,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.black : colors.black,
      width: 100,
      marginBottom: 5,
      marginTop: 4,
    },
    unselectedSortButton: {
      backgroundColor: isDarkMode ? colors.white : colors.white,
    },

    selectedSortButton: {
      backgroundColor: isDarkMode ? colors.green : colors.green, // Different color for selected state
    },

    sortButtonText: {
      color: isDarkMode ? colors.black : colors.black,
      fontWeight: 'bold',
      padding: 2,
      textAlign: "center",
    },

    headerStyle: {
      backgroundColor: isDarkMode ? colors.darkGray : colors.black,
      height: 70,
      borderBottomWidth: 1,
      borderColor: isDarkMode ? colors.white : colors.white,
    },
    headerTitleStyle: {
      flex: 1,
      color: isDarkMode ? colors.red : colors.white,

    },
    ItemsContainer: {
      marginBottom: 330,
    },
    MyCartItemsContainer: {
      flex: 1,
      marginBottom: 31,
    },

    noSavedItemsText: {
      fontSize: 18,
      color: isDarkMode ? colors.black : colors.red,
      textAlign: 'center',
    },
    bottomButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    bottomButton: {
      height: 50,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 5,
    },
    bottomButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    backGroundSaveItems: {
      backgroundColor: isDarkMode ? colors.darkGray : colors.yellow,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: 300,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: "center",

    },
    modalButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#007BFF',
      width: 100,
      height: 40,
    },
    modalButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
    },
    noItemsText: {
      marginTop: 10,
      textAlign: "center",
      fontSize: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
      padding: 20,
      backgroundColor: isDarkMode ? '#303030' : '#fff',
      borderRadius: 10,
      alignItems: "center",
    },

    modalText: {
      fontSize: 18,
      marginBottom: 10,

    },
    modalImage: {
      width: 100,
      height: 100,
      marginBottom: 8,
    },

    OkButtonContainer: {
      borderWidth: 1,
      borderColor: "black",
      width: 50,
      height: 30,
      borderRadius: 10,
      marginTop:10,
    },
    okButton: {
      marginTop: 4,
      textAlign: "center",

    },
    modalText:{
      justifyContent:"center",
      alignItems:"center",
    },
    rating: {
      // Style for the Rating component
      marginTop: 5,
    },
  
  });
};

export default GlobalTheme;
