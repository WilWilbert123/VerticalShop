// CreateAccount.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import GlobalTheme from '../components/GlobalTheme';

const CreateAccount = ({navigation}) => {
  
  const styles = GlobalTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your signup logic here
    // For simplicity, you can log the entered username and password
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your actual signup logic here
  };
  const handleBack = () => {
   navigation.replace("LoginScreen");
  };

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHKYV5FbRc1wFLAYHarpvncKnJYNIQ1y4oA&usqp=CAU' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.5)', padding: 100, borderRadius: 10}}>
       <View style={{alignItems:"center",marginTop:50}}>
        <Text style={{color:"white",fontSize:30}}>Create Account</Text>
        </View>
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white', borderColor: "white" }}
          placeholder="Full name"
          placeholderTextColor="white"
        />
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white', borderColor: "white" }}
          placeholder="Email Address"
          placeholderTextColor="white"
        />
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white', borderColor: "white" }}
          placeholder="Username"
          placeholderTextColor="white"
        />
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white', borderColor: "white" }}
          placeholder="Password"
          placeholderTextColor="white"
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',padding:25}}>
          <TouchableOpacity  style={{ width: 100, height: 40,borderColor:"white", borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }} onPress={handleBack}>
            <Text style={{color:"white"}}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10, width: 100, height: 40,borderColor:"white", borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }} onPress={handleSignUp}>
            <Text style={{color:"white"}}>Sign Up</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ImageBackground>
  );
};

export default CreateAccount;
