import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';

const Avatar = ({ onEdit, isDarkModeEnabled }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.avatarContainer}>
      <Image source={require('../../assets/avatar.png')} style={styles.profileImage} />
      <TouchableOpacity onPress={onEdit} style={styles.editIconContainer}>
        <Icon name="edit" size={24} color={isDarkModeEnabled ? '#fff' : colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
});

export default Avatar;