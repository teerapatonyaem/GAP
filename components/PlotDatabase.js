// database.js
import SQLite from 'react-native-sqlite-storage';

// เชื่อมต่อฐานข้อมูล SQLite
const db = SQLite.openDatabase(
  {
    name: 'plots.db',
    location: 'default',
  },
  () => {},
  error => {
    console.error(error);
  }
);

// สร้างตาราง plot
const createPlotTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS plot (
        plot_id INTEGER PRIMARY KEY AUTOINCREMENT,
        rice_variety TEXT,
        area REAL,
        planting_date DATE,
        planting_method TEXT,
        soil_type TEXT,
        water_source TEXT,
        location TEXT
      )`,
      [],
      (tx, results) => {
        console.log('Table created successfully');
      },
      (error) => {
        console.error('Error creating table', error);
      }
    );
  });
};

// เพิ่มข้อมูลลงในตาราง plot
const addPlot = (rice_variety, area, planting_date, planting_method, soil_type, water_source, location, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO plot (rice_variety, area, planting_date, planting_method, soil_type, water_source, location) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [rice_variety, area, planting_date, planting_method, soil_type, water_source, location],
      (tx, results) => {
        callback(true);
      },
      (error) => {
        callback(false);
        console.error('Error inserting data', error);
      }
    );
  });
};

export { db, createPlotTable, addPlot };
