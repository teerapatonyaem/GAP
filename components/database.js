// database.js
import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let db;


export const openDatabase = async () => {
  try {
    // Specify the full path and file extension for the database
    db = await SQLite.openDatabase({name: 'general.db', location: 'default'});
    console.log('Database opened');
    await createTables();
  } catch (error) {
    console.log(error);
  }
};

export const createTables = async () => {
  try {
    // Adjust the SQL statement to create the "general" table
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS general (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        job TEXT, 
        quantity TEXT, 
        cost TEXT, 
        costDetails TEXT, 
        additional TEXT
      );`
    );
    console.log('Table created successfully');
  } catch (error) {
    console.log(error);
  }
};

export const saveTask = async (job, quantity, cost, costDetails, additional) => {
  try {
    const results = await db.executeSql(
      `INSERT INTO general (job, quantity, cost, costDetails, additional) 
      VALUES (?, ?, ?, ?, ?);`,
      [job, quantity, cost, costDetails, additional]
    );
    if (results[0].rowsAffected > 0) {
      console.log('Task saved successfully');
    } else {
      console.log('Failed to save task');
    }
  } catch (error) {
    console.log(error);
  }
};

export default openDatabase;
