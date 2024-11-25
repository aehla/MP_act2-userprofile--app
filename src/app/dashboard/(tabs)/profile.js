import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../../../components/Avatar';

const Profile = () => {
  const handleEdit = (section) => {
    console.log(`Edit ${section} clicked`);
  };

  return (
    <ScrollView style={styles.container}>
     {/* Profile Header */}
     <View style={styles.profileHeader}>
        {/* Avatar */}
        <Avatar 
          size={100} 
          source={{ uri: '../../assets/avatar.png' }} // Replace with your avatar image URL
          fallback="EG" // Fallback initials for the avatar
          style={styles.avatar}
        />
        <Text style={styles.nameText}>Ella Guillena</Text>
        <Text style={styles.joinedText}>Joined 3 days ago</Text>
      </View>

      {/* Personal Information Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity onPress={() => handleEdit('Personal Information')}>
            <Icon name="edit" size={24} color="#6C63FF" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Ella Guillena</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Sex:</Text>
          <Text style={styles.value}>Female</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>CDO City, 9000</Text>
        </View>
      </View>

      {/* Contact Information Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <TouchableOpacity onPress={() => handleEdit('Contact Information')}>
            <Icon name="edit" size={24} color="#6C63FF" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Mobile:</Text>
          <Text style={styles.value}>+63 912 345 6789</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>ella@example.com</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingVertical: 16,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#201B51',
    marginTop: 8,
    marginBottom: 8,
  },
  joinedText: {
    fontSize: 14,
    color: 'gray',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#6C63FF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#201B51',
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },
});

export default Profile;
