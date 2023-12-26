// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigator/navigation';
import { ThemeProvider } from './src/components/ThemeContext'; 
import OfflineNotice from './src/components/OfflineNotice';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <HomeStackNavigator />
        <OfflineNotice />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
