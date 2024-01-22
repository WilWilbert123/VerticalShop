// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from '../components/ThemeContext';

const LoginScreen = ({ navigation }) => {
    const { backgroundColor, textColor } = useTheme();

    const handleLogin = () => {
        // Implement your login logic here
        // For simplicity, let's navigate to the HomeScreen on successful login
        navigation.navigate('HomeScreen');
    };

    return (
        <ImageBackground
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHKYV5FbRc1wFLAYHarpvncKnJYNIQ1y4oA&usqp=CAU' }}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 100, borderRadius: 10 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 24, color: 'white', marginBottom: 20 }}>Login</Text>
                </View>
                <TextInput
                    style={{ height: 40, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white' }}
                    placeholder="Username"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={{ height: 40, width: 250, borderColor: 'white', borderWidth: 1, margin: 10, padding: 8, color: 'white' }}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry
                />
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#3498db', padding: 10, borderRadius: 5, marginTop: 10, width: 250 }}
                        onPress={handleLogin}
                    >

                        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <TouchableOpacity onPress={() => navigation.replace('CreateAccount')}>
                            <Text style={{ color: 'white', marginTop: 10, textDecorationLine: 'underline' }}>Create an account</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
