// CreateAccount.js
import React from 'react';
import { View, Text } from 'react-native';
import GlobalTheme from '../components/GlobalTheme';
import ThemeToggle from '../components/ThemeToggle';

const CreateAccount = () => {
  const styles = GlobalTheme();

  return (
    <View style={[styles.background, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={styles.text}>CreateAccount</Text>
      <ThemeToggle />
    </View>
  );
};

export default CreateAccount;
