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
    background: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.gray : colors.lightGray,
    },
    searchBox: {
      flex: 0,
      backgroundColor: isDarkMode ? colors.white : colors.white,
      padding: 10,
      margin: 10,
      borderRadius: 8,
      color: isDarkMode ? colors.black : colors.black,
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
    bottomTabScreen: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.black : colors.lightGray,
      marginTop: 40,
    },
    listItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderBottomColor: isDarkMode ? colors.white : colors.black,
      backgroundColor: isDarkMode ? colors.darkGray : colors.lightGray,
      borderBottomWidth: 1,
    },
    
    gridItemText: {
      textAlign: 'center',
      fontSize: 18,
      color: isDarkMode ? colors.white : colors.black,
    },
    addToCartContainer: {
      borderWidth:1,
      borderColor: isDarkMode ? colors.white : colors.black,
      width:120,
      borderRadius:10,
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
      marginBottom:-5,
    },
    cartItemContainer: {
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
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      color: isDarkMode ? colors.white : colors.black,
      fontSize: 18,
      marginLeft:5,
      marginTop:18,
    },
    deleteIcon: {
      marginLeft: 'auto',
      marginLeft:20,
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
      alignItems:"center",
      padding: 20,
      margin: 5,
      backgroundColor: isDarkMode ? colors.black : colors.white,
      borderRadius: 8,
      width:300,
      borderWidth:1,
      borderColor:isDarkMode ? colors.white : colors.black,
    },

    accountTabItemText: {
      fontSize: 18,
      color: isDarkMode ? colors.white : colors.black,
    },
    cartItemCountRow: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
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
      borderWidth:1,
      borderColor: isDarkMode ? colors.white : colors.black, 
      // Add any other styles you want for the grid item container
    },
    
    gridItemImage: {
      width: 100, 
      height: 100, 
      borderRadius: 8, 
    },
    AddToCartContainer:{
      flexDirection: 'row',
      justifyContent:"center",
    },
    AddToCartText:{
      marginTop:3,
      fontWeight:"bold",
      color: isDarkMode ? colors.white : colors.black,
    },
    
    gridItemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? colors.red : colors.green,
      textAlign: 'center',
    },
    cartItemPrice:{
      textAlign:"center",
      color: isDarkMode ? colors.red : colors.green,
     justifyContent:"center",
    },
    totalPriceContainer: {
      position: 'absolute',
      bottom: 50, // Adjust this value to your preference
      backgroundColor: 'white',
      width: '100%',
      padding:5,
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
      backgroundColor: 'green',
      width: '100%',
      padding: 15,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    MyCartContainer:{
        flex: 1,
        justifyContent: 'space-between',
    }
    
  });
};

export default GlobalTheme;
