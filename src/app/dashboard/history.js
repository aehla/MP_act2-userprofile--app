import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryTransaction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nothing to show yet</Text>
      <Text style={styles.subheader}>Book a study hub to kickstart your booking history!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#201B51',
    marginBottom: 8,
    textAlign: 'center',       // Ensures text is centered within its container
  },
  subheader: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',       // Ensures text is centered within its container
  },
});

export default HistoryTransaction;
