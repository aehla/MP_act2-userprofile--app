import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Subheading, List, Divider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';  // For routing

const Settings = () => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const router = useRouter(); // Router instance

  const toggleDarkMode = () => {
    setDarkModeEnabled((prevMode) => !prevMode);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!isNotificationsEnabled);
  };

  const handleLogout = () => {
    router.push('/'); // Navigate to login page using router.push
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkModeEnabled ? '#333' : '#f5f5f5' }]}>

      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        <Subheading style={[styles.sectionHeader, { color: isDarkModeEnabled ? '#fff' : '#808080' }]}>Settings</Subheading>
        <List.Section>
          <List.Item
            title="Notifications"
            titleStyle={{ color: isDarkModeEnabled ? '#fff' : '#000' }}
            left={() => <Icon name="notifications" size={24} color="#A594F9" />}
            right={() => (
              <TouchableOpacity
                onPress={toggleNotifications}
                style={[
                  styles.customToggle,
                  isNotificationsEnabled ? styles.customToggleEnabled : styles.customToggleDisabled,
                ]}
              >
                <View style={[styles.toggleThumb, isNotificationsEnabled && styles.thumbEnabled]}>
                  <Icon name={isNotificationsEnabled ? 'notifications-active' : 'notifications-off'} size={20} color="#FFF" />
                </View>
              </TouchableOpacity>
            )}
          />
          <List.Item
            title="Dark Mode"
            titleStyle={{ color: isDarkModeEnabled ? '#fff' : '#000' }}
            left={() => <Icon name="brightness-4" size={24} color="#A0DEFF" />}
            right={() => (
              <TouchableOpacity
                onPress={toggleDarkMode}
                style={[
                  styles.customToggle,
                  isDarkModeEnabled ? styles.customToggleEnabled : styles.customToggleDisabled,
                ]}
              >
                <View style={[styles.toggleThumb, isDarkModeEnabled && styles.thumbEnabled]}>
                  <Icon name={isDarkModeEnabled ? 'nights-stay' : 'wb-sunny'} size={20} color="#FFF" />
                </View>
              </TouchableOpacity>
            )}
          />
        </List.Section>
      </View>

      <Divider style={styles.divider} />

      {/* Logout Button at the bottom with icon */}
      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton} icon="exit-to-app">
        Logout
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 45,
    justifyContent: 'space-between',  // Keeps the logout button at the bottom
  },
  settingsContainer: {
    flexGrow: 1,  // Makes sure the settings take up only necessary space
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  customToggle: {
    width: 50,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 2,
  },
  customToggleEnabled: {
    backgroundColor: '#1E2A5E',
  },
  customToggleDisabled: {
    backgroundColor: '#ccc',
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#A0DEFF',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: 0 }],
  },
  thumbEnabled: {
    transform: [{ translateX: 20 }],
  },
  divider: {
    marginVertical: 16,
  },
  logoutButton: {
    backgroundColor: '#201B51',
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 'auto',  // Ensures the logout button stays at the bottom
    flexDirection: 'row',  // Aligns the icon and text horizontally
    justifyContent: 'center', // Centers the content
    alignItems: 'center', // Centers the icon and text vertically
  },
});

export default Settings;
