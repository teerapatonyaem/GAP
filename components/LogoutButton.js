import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {

    await AsyncStorage.removeItem('authToken');

   
    navigation.replace('Login'); 
  };

  return (
    <Pressable style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutText}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LogoutButton;
