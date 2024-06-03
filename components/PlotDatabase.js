import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const dbName = 'PlotDatabase.db';

let db;

const initDB = async () => {
  if (!db) {
    db = await SQLite.openDatabase({
      name: dbName,
      location: 'default',
    });

    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS plot (
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
    `);
  }

  return db;
};

const savePlotData = async (plotData) => {
  const db = await initDB();

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

  try {
    await db.executeSql(`
      INSERT INTO plot (
        rice_variety, area, planting_date, planting_method, soil_type, water_source, location, user_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [rice_variety, area, planting_date, planting_method, soil_type, water_source, location, user_id]);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

export { initDB, savePlotData };
