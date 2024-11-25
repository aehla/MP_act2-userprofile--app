import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // This will hide the header for all screens by default
        tabBarActiveTintColor: '#F6B01A', // Active icon color
        tabBarInactiveTintColor: '#000000', // Inactive icon color
        tabBarActiveBackgroundColor: '#201B51',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          margin: 10,
          borderRadius: 10,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#F6B01A' : color} // Active color or fallback to default
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false, // Ensures no header for Profile screen
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={24}
              color={focused ? '#F6B01A' : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false, // Ensures no header for Settings screen
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={focused ? '#F6B01A' : color}
            />
          ),
        }}
      />

    </Tabs>
  );
};

export default DashboardLayout;
