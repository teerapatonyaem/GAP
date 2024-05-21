import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let ferdb;

export const openDatabase = async () => {
  try {
    ferdb = await SQLite.openDatabase({ name: 'fertilizer.db', location: 'default' });
    console.log('Database opened');
    await createTables();
  } catch (error) {
    console.log('Failed to open database:', error);
  }
};

export const createTables = async () => {
  try {
    await ferdb.executeSql(
      `CREATE TABLE IF NOT EXISTS Fertilizer (
        ferid INTEGER PRIMARY KEY AUTOINCREMENT,
        ferjob TEXT,
        ferformula TEXT,
        ferrate TEXT,
        ferquantity TEXT,
        fercost TEXT,
        feradditional TEXT
      );`
    );
    console.log('Table created successfully');
  } catch (error) {
    console.log('Failed to create table:', error);
  }
};

export const saveTask = async (ferjob, ferformula, ferrate, ferquantity, fercost, feradditional) => {
  try {
    if (!ferdb) {
      await openDatabase();
    }
    
    const results = await ferdb.executeSql(
      `INSERT INTO Fertilizer (ferjob, ferformula, ferrate, ferquantity, fercost, feradditional) 
       VALUES (?, ?, ?, ?, ?, ?);`,
      [ferjob, ferformula, ferrate, ferquantity, fercost, feradditional]
    );

    if (results[0].rowsAffected > 0) {
      console.log('Task saved successfully');
    } else {
      console.log('Failed to save task');
    }
  } catch (error) {
    console.log('Failed to save task:', error);
  }
};

export default openDatabase;
