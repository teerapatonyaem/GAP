import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import IncomeForm from "../components/IncomeForm";
import FormContainer from "../components/FormContainer";
import ProfileForm1 from "../components/ProfileForm1";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import SQLite from 'react-native-sqlite-storage';
import UserContext from "../components/UserContext";

const generalDb = SQLite.openDatabase(
  {
    name: 'general.db',
    location: 'default'
  },
  () => { console.log('General Database opened'); },
  error => { console.log('Error opening general database: ', error); }
);

const fertilizerDb = SQLite.openDatabase(
  {
    name: 'fertilizer.db',
    location: 'default'
  },
  () => { console.log('Fertilizer Database opened'); },
  error => { console.log('Error opening fertilizer database: ', error); }
);

const chemicalDb = SQLite.openDatabase(
  {
    name: 'chemical.db',
    location: 'default'
  },
  () => { console.log('Chemical Database opened'); },
  error => { console.log('Error opening chemical database: ', error); }
);

const Expense = () => {
  const navigation = useNavigation();
  const [generalData, setGeneralData] = useState([]);
  const [fertilizerData, setFertilizerData] = useState([]);
  const [chemicalData, setChemicalData] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchGeneralData = async () => {
      if (user) {
        generalDb.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM general WHERE user_id = ?',
            [user.id],
            (tx, results) => {
              if (results.rows.length > 0) {
                setGeneralData(results.rows.item(0));
              }
            },
            (error) => {
              console.error('Error fetching general data:', error);
            }
          );
        });
      }
    };

    const fetchFertilizerData = async () => {
      if (user) {
        fertilizerDb.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM Fertilizer WHERE user_id = ?',
            [user.id],
            (tx, results) => {
              let fertilizers = [];
              for (let i = 0; i < results.rows.length; i++) {
                fertilizers.push(results.rows.item(i));
              }
              setFertilizerData(fertilizers);
            },
            (error) => {
              console.error('Error fetching fertilizer data:', error);
            }
          );
        });
      }
    };

    const fetchChemicalData = async () => {
      if (user) {
        chemicalDb.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM Chemical WHERE user_id = ?',
            [user.id],
            (tx, results) => {
              let chemicals = [];
              for (let i = 0; i < results.rows.length; i++) {
                chemicals.push(results.rows.item(i));
              }
              setChemicalData(chemicals);
            },
            (error) => {
              console.error('Error fetching chemical data:', error);
            }
          );
        });
      }
    };

    fetchGeneralData();
    fetchFertilizerData();
    fetchChemicalData();
  }, [user]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.expense}
        contentContainerStyle={styles.expenseScrollViewContent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Pressable
            style={styles.basilIconsoutlineoutlinege}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={styles.text}>รายรับ-รายจ่าย</Text>
        </View>
        
        <IncomeForm />
        
        <View style={styles.frameGroup}>
          <FormContainer
            plantSeedImageUrl="ค่าใช้จ่ายทั่วไป"
            priceReduction={`-฿${generalData.cost}`}
          />
          {fertilizerData.map((fertilizer, index) => (
            <FormContainer
              key={index}
              plantSeedImageUrl={`ปุ๋ย: ${fertilizer.ferjob}`}
              priceReduction={`-฿${fertilizer.fercost}`}
            />
          ))}
          {chemicalData.map((chemical, index) => (
            <FormContainer
              key={index}
              plantSeedImageUrl={`ยา: ${chemical.chejob}`}
              priceReduction={`-฿${chemical.checost}`}
            />
          ))}
        </View>
      </ScrollView>
      
      <ProfileForm1
        onLayoutPress={() => navigation.navigate("Expense")}
        onLayoutPress1={() => navigation.navigate("Status1")}
        onLayoutPress2={() => navigation.navigate("Modal1")}
        onLayoutPress3={() => navigation.navigate("RiceInfo")}
        onLayoutPress4={() => navigation.navigate("Proofile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Ensures the ProfileForm1 stays at the bottom
  },
  expense: {
    flex: 1, // Allowing ScrollView to take all available space
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  expenseScrollViewContent: {
    paddingTop: 28,
    paddingBottom: 60, // To ensure some space at the bottom if necessary
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    marginLeft: 8,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Expense;
