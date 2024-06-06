import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let db;
let generalDb;
let fertilizerDb;
let chemicalDb;
let expenseDb;
let otherPlantDb;
let weedDb;
let plantDiseaseDb;
let insectDb;
let memberDb;

export const openDatabases = async () => {
  try {
    db = await SQLite.openDatabase({ name: 'PlotDatabase.db', location: 'default' });
    console.log('Plot database opened');
    await createPlotTable();

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

const createPlotTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS PlotDatabase (
      plot_id INTEGER PRIMARY KEY AUTOINCREMENT,
      rice_variety TEXT,
      area REAL,
      planting_date DATE,
      planting_method TEXT,
      soil_type TEXT,
      water_source TEXT,
      location TEXT,
      user_id INTEGER
    );
  `;

  try {
    await db.executeSql(createTableQuery);
    console.log('Plot table created successfully');
  } catch (error) {
    console.error('Failed to create plot table:', error);
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
        additional TEXT,
        user_id INTEGER
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
        feradditional TEXT,
        user_id INTEGER
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
        checost TEXT,
        user_id INTEGER
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
        revenue INTEGER,
        user_id INTEGER
      );`
    );
    console.log('Expense table created successfully');
  } catch (error) {
    console.log('Failed to create Expense table:', error);
  }
};

//////////plot
export const savePlotData = async (plotData) => {
  const {
    rice_variety,
    area,
    planting_date,
    planting_method,
    soil_type,
    water_source,
    location,
    user_id,
  } = plotData;

  const query = `
    INSERT INTO PlotDatabase (
      rice_variety, area, planting_date, planting_method, soil_type, water_source, location, user_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    rice_variety,
    area,
    planting_date,
    planting_method,
    soil_type,
    water_source,
    location,
    user_id,
  ];

  try {
    const results = await db.executeSql(query, params);

    if (results[0].rowsAffected > 0) {
      console.log('Plot data saved successfully');
    } else {
      console.log('Failed to save plot data');
    }
  } catch (error) {
    console.error('Error inserting plot data:', error);
  }
};




export const saveGeneralTask = async (job, quantity, cost, costDetails, additional, user_id) => {
  if (!generalDb) {
    console.error('General database is not opened');
    return;
  }

  try {
    const query = `
      INSERT INTO general (job, quantity, cost, costDetails, additional, user_id) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const params = [job, quantity, cost, costDetails, additional, user_id];

    const results = await generalDb.executeSql(query, params);

    if (results[0].rowsAffected > 0) {
      console.log('General task saved successfully');
    } else {
      console.log('Failed to save general task');
    }
  } catch (error) {
    console.log('Failed to save general task:', error);
  }
};

export const saveFertilizerTask = async (ferjob, ferformula, ferrate, ferquantity, fercost, feradditional,user_id) => {
  try {
    const results = await fertilizerDb.executeSql(
      `INSERT INTO Fertilizer (ferjob, ferformula, ferrate, ferquantity, fercost, feradditional,user_id) 
      VALUES (?, ?, ?, ?, ?, ?,?);`,
      [ferjob, ferformula, ferrate, ferquantity, fercost, feradditional,user_id]
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

export const saveChemicalTask = async (chejob, pasttype, cheuse, cherate, cheamount, checost,user_id) => {
  try {
    const results = await chemicalDb.executeSql(
      `INSERT INTO Chemical (chejob, pasttype, cheuse, cherate, cheamount, checost,user_id) 
      VALUES (?, ?, ?, ?, ?, ?,?);`,
      [chejob, pasttype, cheuse, cherate, cheamount, checost,user_id]
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

export const saveExpenseTask = async (payoutfactor, expenseamount, expenses, revenue,user_id) => {
  try {
    const results = await expenseDb.executeSql(
      `INSERT INTO Expense (payoutfactor, expenseamount, expenses, revenue,user_id) 
      VALUES (?, ?, ?, ?,?);`,
      [payoutfactor, expenseamount, expenses, revenue,user_id]
    );

    if (results[0].rowsAffected > 0) {
      console.log('Expense task saved successfully');
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

////////////////////// Plant Disease /////////////////////////

export const openPlantDiseaseDatabase = async () => {
  try {
    plantDiseaseDb = await SQLite.openDatabase({ name: 'plantdisease.db', location: 'default' });
    console.log('Plant Disease database opened');
    await createPlantDiseaseTable();
  } catch (error) {
    console.log('Failed to open Plant Disease database:', error);
  }
};

const createPlantDiseaseTable = async () => {
  try {
    await plantDiseaseDb.executeSql(
      `CREATE TABLE IF NOT EXISTS PlantDisease (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        disease TEXT,
        amount TEXT
      );`
    );
    console.log('Plant Disease table created successfully');
  } catch (error) {
    console.log('Failed to create Plant Disease table:', error);
  }
};

export const savePlantDisease = async (disease, amount) => {
  try {
    const results = await plantDiseaseDb.executeSql(
      `INSERT INTO PlantDisease (disease, amount) VALUES (?, ?);`,
      [disease, amount]
    );
    if (results[0].rowsAffected > 0) {
      console.log('Plant Disease saved successfully');
    } else {
      console.log('Failed to save Plant Disease');
    }
  } catch (error) {
    console.log('Failed to save Plant Disease:', error);
  }
};

////////////////////// Insect /////////////////////////

export const openInsectDatabase = async () => {
  try {
    insectDb = await SQLite.openDatabase({ name: 'insect.db', location: 'default' });
    console.log('Insect database opened');
    await createInsectTable();
  } catch (error) {
    console.log('Failed to open Insect database:', error);
  }
};

const createInsectTable = async () => {
  try {
    await insectDb.executeSql(
      `CREATE TABLE IF NOT EXISTS Insect (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        insect TEXT,
        amount TEXT
      );`
    );
    console.log('Insect table created successfully');
  } catch (error) {
    console.log('Failed to create Insect table:', error);
  }
};

export const saveInsect = async (insect, amount) => {
  try {
    const results = await insectDb.executeSql(
      `INSERT INTO Insect (insect, amount) VALUES (?, ?);`,
      [insect, amount]
    );
    if (results[0].rowsAffected > 0) {
      console.log('Insect saved successfully');
    } else {
      console.log('Failed to save Insect');
    }
  } catch (error) {
    console.log('Failed to save Insect:', error);
  }
};
/////////////////////////Member/////////

export const openMemberDatabase = async () => {
  try {
    insectDb = await SQLite.openDatabase({ name: 'member.db', location: 'default' });
    console.log('Member database opened');
    await createMemberTable();
  } catch (error) {
    console.log('Failed to open Member database:', error);
  }
};

const createMemberTable = async () => {
  try {
    await insectDb.executeSql(
      `CREATE TABLE IF NOT EXISTS Members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        position TEXT
      );`
    );
    console.log('Member table created successfully');
  } catch (error) {
    console.log('Failed to create Member table:', error);
  }
};

export const saveMember = async (name, position) => {
  try {
    const results = await memberDb.executeSql(
      `INSERT INTO Insect (name, position) VALUES (?, ?);`,
      [name, position]
    );
    if (results[0].rowsAffected > 0) {
      console.log('Member saved successfully');
    } else {
      console.log('Failed to save Member');
    }
  } catch (error) {
    console.log('Failed to save Member:', error);
  }
};