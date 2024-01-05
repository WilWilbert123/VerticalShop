// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigator/navigation';
import { ThemeProvider } from './src/components/ThemeContext'; 
import OfflineNotice from './src/components/OfflineNotice';
import ThemeToggle from './src/components/ThemeToggle';
const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <HomeStackNavigator />
        <OfflineNotice />
        <ThemeToggle />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
