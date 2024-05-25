import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let generalDb;
let fertilizerDb;

export const openDatabases = async () => {
  try {
    // Open the general database
    generalDb = await SQLite.openDatabase({ name: 'general.db', location: 'default' });
    console.log('General database opened');
    await createGeneralTable();

    // Open the fertilizer database
    fertilizerDb = await SQLite.openDatabase({ name: 'fertilizer.db', location: 'default' });
    console.log('Fertilizer database opened');
    await createFertilizerTable();
  } catch (error) {
    console.log('Failed to open databases:', error);
  }
};

const createGeneralTable = async () => {
  try {
    await generalDb.executeSql(
      `CREATE TABLE IF NOT EXISTS general (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        job TEXT, 
        quantity TEXT, 
        cost TEXT, 
        costDetails TEXT, 
        additional TEXT
      );`
    );
    console.log('General table created successfully');
  } catch (error) {
    console.log('Failed to create general table:', error);
  }
};

const createFertilizerTable = async () => {
  try {
    await fertilizerDb.executeSql(
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
    console.log('Fertilizer table created successfully');
  } catch (error) {
    console.log('Failed to create fertilizer table:', error);
  }
};

export const saveGeneralTask = async (job, quantity, cost, costDetails, additional) => {
  try {
    const results = await generalDb.executeSql(
      `INSERT INTO general (job, quantity, cost, costDetails, additional) 
      VALUES (?, ?, ?, ?, ?);`,
      [job, quantity, cost, costDetails, additional]
    );
    if (results[0].rowsAffected > 0) {
      console.log('General task saved successfully');
    } else {
      console.log('Failed to save general task');
    }
  } catch (error) {
    console.log('Failed to save general task:', error);
  }
};

export const saveFertilizerTask = async (ferjob, ferformula, ferrate, ferquantity, fercost, feradditional) => {
  try {
    const results = await fertilizerDb.executeSql(
      `INSERT INTO Fertilizer (ferjob, ferformula, ferrate, ferquantity, fercost, feradditional) 
      VALUES (?, ?, ?, ?, ?, ?);`,
      [ferjob, ferformula, ferrate, ferquantity, fercost, feradditional]
    );

    if (results[0].rowsAffected > 0) {
      console.log('Fertilizer task saved successfully');
    } else {
      console.log('Failed to save fertilizer task');
    }
  } catch (error) {
    console.log('Failed to save fertilizer task:', error);
  }
};

export default openDatabases;
