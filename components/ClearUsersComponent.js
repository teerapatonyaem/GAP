import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MyDatabase.db',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  error => {
    console.error('Error opening database', error);
  }
);

const ClearUsersComponent = () => {
  const clearAllUsers = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Users', 
        [],
        (tx, results) => {
          console.log('All users deleted successfully.');

         
          tx.executeSql(
            "DELETE FROM sqlite_sequence WHERE name='Users'",
            [],
            () => {
              console.log('Autoincrement value reset.');
            },
            error => {
              console.error('Error resetting autoincrement', error);
            }
          );

          alert('All users deleted successfully and autoincrement reset.');
        },
        error => {
          console.error('Error clearing users', error);
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clearAllUsers}>
        <Text style={styles.clearButton}>Clear All Users</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    fontSize: 18,
    color: 'red',
  },
});

export default ClearUsersComponent;
