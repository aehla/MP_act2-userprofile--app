import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const notifications = [
  { id: 1, title: 'You missed completing your daily task!', status: 'unread' },
  { id: 2, title: 'Great job! You completed a task on time.', status: 'read' },
  { id: 3, title: 'New task added to your list!', status: 'unread' },
  { id: 4, title: 'Reminder: Submit your weekly report by 6 PM.', status: 'read' },
];

const NotificationItem = ({ notification, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.notification, notification.status === 'unread' && styles.unread]}
      onPress={onPress}
    >
      <View style={styles.icon}></View>
      <Text style={[styles.notificationText, notification.status === 'unread' && styles.unreadText]}>
        {notification.title}
      </Text>
    </TouchableOpacity>
  );
};

const NotificationUI = () => {
  const handlePress = (id) => {
    console.log(`Notification ${id} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.notificationList}>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} onPress={() => handlePress(notification.id)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#201B51',
    marginBottom: 20,
  },
  notificationList: {
    marginTop: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: {
    width: 8,
    height: 8,
    backgroundColor: '#201B51',
    borderRadius: 50,
    marginRight: 12,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
  unread: {
    backgroundColor: '#f0f8ff',
  },
  unreadText: {
    fontWeight: 'bold',
    color: '#201B51',
  },
});

export default NotificationUI;
