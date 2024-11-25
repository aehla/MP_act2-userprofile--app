import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure expo-linear-gradient is installed
import { useRouter } from 'expo-router';


const Recover = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleResetPassword = () => {
    console.log('Reset Password button pressed!');
    // Implement reset password logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover Your Account</Text>
      <Text style={styles.subtitle}>Enter your email to recover your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity onPress={handleResetPassword}>
        <LinearGradient colors={['#201B51', '#8A2BE2']} style={styles.button}>
          <Text style={styles.buttonText}>Recover</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#201B51',
    marginBottom: 10,
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
    elevation: 3, // for Android shadow
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
  signInText: {
    fontSize: 14,
    color: '#333',
  },
  signInLinkText: {
    color: '#6A0DAD',
    fontWeight: '600',
  },
});

export default Recover;
