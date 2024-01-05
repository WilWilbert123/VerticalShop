// navigation.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from '../components/ThemeContext';
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CreateAccount from "../screens/CreateAccount"
import SavedItemsScreen from "../screens/SavedItemsScreen";
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  const { backgroundColor, textColor } = useTheme();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor },
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SavedItemsScreen" component={SavedItemsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
