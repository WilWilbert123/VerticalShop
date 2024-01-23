// CreateAccount.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import GlobalTheme from '../components/GlobalTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateAccount = ({ navigation }) => {

  const styles = GlobalTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);


  useEffect(() => {
    // Disable the Save button if either username or password is empty
    setIsSaveButtonDisabled(username.trim() === '' || password.trim() === '');
  }, [username, password]);

  const handlesave = async (username, password) => {
    // Ensure that username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
      console.log('Please enter both username and password');
      return;
    }

    try {
      // Fetch existing user data from AsyncStorage (if any)
      const existingUsersJSON = await AsyncStorage.getItem('users');
      const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

      // Check if the username already exists
      const usernameExists = existingUsers.some(user => user.username === username);

      if (usernameExists) {
        console.log('Username already exists. Choose a different one.');
        return;
      }

      // Add the new user to the existing users array
      const newUser = { username, password };
      const updatedUsers = [...existingUsers, newUser];

      // Save the updated users array to AsyncStorage
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

      // Log success message
      console.log('User successfully signed up:', newUser);

      // Reset the input fields
      setUsername('');
      setPassword('');

      // Disable the Save button after successful save
      setIsSaveButtonDisabled(true);

      // You can navigate to the next screen or perform other actions here
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleBack = () => {
    navigation.replace("LoginScreen");
  };
  const handleInputChange = (text) => {
    // Enable the Save button only if both username and password are not empty
    setIsSaveButtonDisabled(username.trim() === '' || password.trim() === '');
  };
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHKYV5FbRc1wFLAYHarpvncKnJYNIQ1y4oA&usqp=CAU' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', padding: 100, borderRadius: 10 }}>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text style={{ color: "white", fontSize: 30 }}>Create Account</Text>
        </View>
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white' }}
          placeholder="Full name"
          placeholderTextColor="white"
        />
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white' }}
          placeholder="Email Address"
          placeholderTextColor="white"
        />
        <TextInput
        style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white' }}
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUsername(text);
          handleInputChange(text);
        }}
        value={username}
      />
      <TextInput
        style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white' }}
        placeholder="Password"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setPassword(text);
          handleInputChange(text);
        }}
        value={password}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 25 }}>
        <TouchableOpacity style={{ width: 100, height: 40, borderColor: "white", borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }} onPress={handleBack}>
          <Text style={{ color: "white" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
      style={{
        marginLeft: 10,
        width: 100,
        height: 40,
        borderColor: isSaveButtonDisabled ? "gray" : "white", // Change border color based on the button's disabled state
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: isSaveButtonDisabled ? "transparent" : "", // Change background color based on the button's disabled state
      }}
      onPress={() => handlesave(username, password)}
      disabled={isSaveButtonDisabled}
    >
      <Text style={{ color: isSaveButtonDisabled ? "gray" : "white" }}>Save</Text>
    </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>

  );
};

export default CreateAccount;
