// DetailsScreen.js
import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import GlobalTheme from '../components/GlobalTheme';
import ThemeToggle from '../components/ThemeToggle';

const DetailsScreen = ({navigation}) => {
  const styles = GlobalTheme();
const ToCreatescreen = () => {
  navigation.replace("CreateAccount")
}
  return (
    <View style={[styles.background, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <TouchableOpacity onPress={ToCreatescreen}>
      <Text style={styles.text}>DetailsScreen</Text>
      </TouchableOpacity>
      <ThemeToggle />
    </View>
  );
};

export default DetailsScreen;
