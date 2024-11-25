import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure expo-linear-gradient is installed
import { useRouter } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = () => {
    console.log('Sign In button pressed!');
    router.replace('dashboard'); // Navigate to Dashboard
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => router.push('recover')} // Navigate to Forgot Password
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignIn}>
          <LinearGradient
            colors={['#201B51', '#8A2BE2']}
            style={styles.button}
            onPress={() => router.push('dashboard')}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('register')} // Navigate to Sign Up
          style={styles.signUpLink}
        >
          <Text style={styles.signUpText}>
            Don’t have an account?{' '}
            <Text style={styles.signUpLinkText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center', // Centers everything vertically
    alignItems: 'center', // Centers everything horizontally
  },
  logoSection: {
    marginBottom: 30, // Adds some space below the logo
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 250,
  },
  inputSection: {
    width: '80%', // Adjusts the width of the input section
    alignItems: 'center', // Centers content horizontally
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#201B51',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#6A0DAD',
    fontSize: 14,
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  signUpLink: {
    marginTop: 10,
    textAlign: 'center',
  },
signUpText: {
  fontSize: 14,
  color: '#333',
},
signUpLinkText: {
  color: '#6A0DAD',
  fontWeight: '600',
},
});

export default Login;