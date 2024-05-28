import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let generalDb;
let fertilizerDb;
let chemicalDb;
let expenseDb;
let otherPlantDb;
let weedDb;

export const openDatabases = async () => {
  try {
  
    generalDb = await SQLite.openDatabase({ name: 'general.db', location: 'default' });
    console.log('General database opened');
    await createGeneralTable();

    fertilizerDb = await SQLite.openDatabase({ name: 'fertilizer.db', location: 'default' });
    console.log('Fertilizer database opened');
    await createFertilizerTable();

    chemicalDb = await SQLite.openDatabase({ name: 'chemical.db', location: 'default' });
    console.log('Chemical database opened');
    await createChemicalTable();

    expenseDb = await SQLite.openDatabase({ name: 'expense.db', location: 'default' });
    console.log('Expense database opened');
    await createExpenseTable();
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

const createChemicalTable = async () => {
  try {
    await chemicalDb.executeSql(
      `CREATE TABLE IF NOT EXISTS Chemical (
        cheid INTEGER PRIMARY KEY AUTOINCREMENT,
        chejob TEXT,
        pasttype TEXT,
        cheuse TEXT,
        cherate TEXT,
        cheamount TEXT,
        checost TEXT
      );`
    );
    console.log('Chemical table created successfully');
  } catch (error) {
    console.log('Failed to create chemical table:', error);
  }
};

const createExpenseTable = async () => {
  try {
    await expenseDb.executeSql(
      `CREATE TABLE IF NOT EXISTS Expense (
        expenseid INTEGER PRIMARY KEY AUTOINCREMENT,
        payoutfactor TEXT,
        expenseamount TEXT,
        expenses INTEGER,
        revenue INTEGER
      );`
    );
    console.log('Expense table created successfully');
  } catch (error) {
    console.log('Failed to create Expense table:', error);
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

export const saveChemicalTask = async (chejob, pasttype, cheuse, cherate, cheamount, checost) => {
  try {
    const results = await chemicalDb.executeSql(
      `INSERT INTO Chemical (chejob, pasttype, cheuse, cherate, cheamount, checost) 
      VALUES (?, ?, ?, ?, ?, ?);`,
      [chejob, pasttype, cheuse, cherate, cheamount, checost]
    );

    if (results[0].rowsAffected > 0) {
      console.log('Chemical task saved successfully');
    } else {
      console.log('Failed to save chemical task');
    }
  } catch (error) {
    console.log('Failed to save chemical task:', error);
  }
};

export const saveExpenseTask = async (payoutfactor, expenseamount, expenses, revenue) => {
  try {
    const results = await expenseDb.executeSql(
      `INSERT INTO Expense (payoutfactor, expenseamount, expenses, revenue) 
      VALUES (?, ?, ?, ?);`,
      [payoutfactor, expenseamount, expenses, revenue]
    );

    if (results[0].rowsAffected > 0) {
      console.log('expense task saved successfully');
    } else {
      console.log('Failed to save expense task');
    }
  } catch (error) {
    console.log('Failed to save expense task:', error);
  }
};

////////////////////// Other Plant /////////////////////////

export const openOtherPlantDatabase = async () => {
  try {
    otherPlantDb = await SQLite.openDatabase({ name: 'otherPlant.db', location: 'default' });
    console.log('OtherPlant database opened');
    await createOtherPlantTable();
  } catch (error) {
    console.log('Failed to open OtherPlant database:', error);
  }
};

const createOtherPlantTable = async () => {
  try {
    await otherPlantDb.executeSql(
      `CREATE TABLE IF NOT EXISTS OtherPlant (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        plantType TEXT,
        amount TEXT
      );`
    );
    console.log('OtherPlant table created successfully');
  } catch (error) {
    console.log('Failed to create OtherPlant table:', error);
  }
};

export const saveOtherPlant = async (plantType, amount) => {
  try {
    const results = await otherPlantDb.executeSql(
      `INSERT INTO OtherPlant (plantType, amount) VALUES (?, ?);`,
      [plantType, amount]
    );
    if (results[0].rowsAffected > 0) {
      console.log('OtherPlant saved successfully');
    } else {
      console.log('Failed to save OtherPlant');
    }
  } catch (error) {
    console.log('Failed to save OtherPlant:', error);
  }
};
////////////////////// Weed /////////////////////////

export const openWeedDatabase = async () => {
  try {
    weedDb = await SQLite.openDatabase({ name: 'weed.db', location: 'default' });
    console.log('Weed database opened');
    await createWeedTable();
  } catch (error) {
    console.log('Failed to open Weed database:', error);
  }
};

const createWeedTable = async () => {
  try {
    await weedDb.executeSql(
      `CREATE TABLE IF NOT EXISTS Weed (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        weed TEXT,
        amount TEXT
      );`
    );
    console.log('Weed table created successfully');
  } catch (error) {
    console.log('Failed to create Weed table:', error);
  }
};

export const saveWeed = async (weed, amount) => {
  try {
    const results = await weedDb.executeSql(
      `INSERT INTO Weed (weed, amount) VALUES (?, ?);`,
      [weed, amount]
    );
    if (results[0].rowsAffected > 0) {
      console.log('Weed saved successfully');
    } else {
      console.log('Failed to save Weed');
    }
  } catch (error) {
    console.log('Failed to save Weed:', error);
  }
};



export default openDatabases;
