import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from '../components/ThemeContext';
import GlobalTheme from '../components/GlobalTheme';

const LoginScreen = ({ navigation }) => {
    const { isDarkMode } = useTheme();
    const { backgroundColor, textColor } = useTheme();
    const styles = GlobalTheme(isDarkMode);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('HomeScreen');
    };

    const isLoginButtonDisabled = username === '' || password === '';

    return (
        <ImageBackground
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHKYV5FbRc1wFLAYHarpvncKnJYNIQ1y4oA&usqp=CAU' }}
            style={styles.imageBackground}
        >
            <View style={styles.overlayContainer}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.LoginText}>Login</Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor={isDarkMode ? "black" : "white"}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={{ ...styles.textInput, width: 250 }}
                    placeholder="Password"
                    placeholderTextColor={isDarkMode ? "black" : "white"}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={[styles.button, { opacity: isLoginButtonDisabled ? 0.5 : 1 }]}
                        onPress={handleLogin}
                        disabled={isLoginButtonDisabled}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <TouchableOpacity onPress={() => navigation.replace('CreateAccount')}>
                            <Text style={styles.linkText}>Create an account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
