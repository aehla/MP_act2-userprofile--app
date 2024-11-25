import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
        <Drawer.Screen
          name="(tabs)" // Home tab, use the correct screen path here
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ fontWeight: 'bold', color: focused ? '#201B51' : '#6c757d' }}>
                Home
              </Text>
            ),
            title: 'Home',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={20} color={focused ? '#201B51' : '#6c757d'} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings" // Ensure the correct screen path for settings
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ fontWeight: 'bold', color: focused ? '#201B51' : '#6c757d' }}>
                Settings
              </Text>
            ),
            title: 'Settings',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline'} size={20} color={focused ? '#201B51' : '#6c757d'} />
            ),
          }}
        />
        <Drawer.Screen
          name="history" // Ensure the path to the HistoryTransaction screen is correct
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ fontWeight: 'bold', color: focused ? '#201B51' : '#6c757d' }}>
                History
              </Text>
            ),
            title: 'History',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'history' : 'history'} size={20} color={focused ? '#201B51' : '#6c757d'} />
            ),
          }}
        />
        <Drawer.Screen
          name="notification" // Corrected to Notification
          options={{
            drawerLabel: ({ focused }) => (
              <Text style={{ fontWeight: 'bold', color: focused ? '#201B51' : '#6c757d' }}>
                Notifications
              </Text>
            ),
            title: 'Notifications', // Corrected title
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'bell' : 'bell-outline'} size={20} color={focused ? '#201B51' : '#6c757d'} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
