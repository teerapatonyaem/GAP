import * as React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

// Open the SQLite database
const db = SQLite.openDatabase(
  {
    name: 'expense.db',
    location: 'default'
  },
  () => { console.log('Database opened'); },
  error => { console.log('Error opening database: ', error); }
);

const IncomeForm = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch the total expenses and revenue
    const fetchData = () => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT SUM(expenses) as totalExpenses, SUM(revenue) as totalRevenue FROM Expense`,
          [],
          (_, results) => {
            if (results.rows.length > 0) {
              const data = results.rows.item(0);
              setTotalExpenses(data.totalExpenses || 0);
              setTotalRevenue(data.totalRevenue || 0);
            }
          },
          (tx, error) => {
            console.log('Failed to fetch data from Expense table:', error);
          }
        );
      });
    };

    fetchData();
  }, []);

  return (
    <View style={styles.frameParent}>
      <View style={styles.groupShadowBox}>
        <Text style={[styles.text, styles.textTypo1]}>-฿{totalExpenses}</Text>
        <Text style={[styles.text1, styles.textFlexBox]}>รายจ่าย</Text>
      </View>
      <View style={[styles.group, styles.groupShadowBox]}>
        <Text style={[styles.text2, styles.textTypo]}>฿{totalRevenue}</Text>
        <Text style={[styles.text3, styles.textTypo]}>รายรับ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    color: Color.errorColourError500,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
  },
  textFlexBox: {
    textAlign: "left",
    marginTop: 8,
  },
  groupShadowBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#e6e8ec",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    flex: 1,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.secondaryColourOnSecondaryCont,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
  },
  text: {
    textAlign: "center",
  },
  text1: {
    color: Color.errorColourError500,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
  },
  text2: {
    textAlign: "center",
  },
  text3: {
    textAlign: "left",
    marginTop: 8,
  },
  group: {
    marginLeft: 8,
  },
  frameParent: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default IncomeForm;
