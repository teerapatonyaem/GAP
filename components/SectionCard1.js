import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import SQLite from "react-native-sqlite-storage";
import { useIsFocused } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const db = SQLite.openDatabase('otherPlant.db');
const weedDb = SQLite.openDatabase('weed.db');
const plantDiseaseDb = SQLite.openDatabase('plantdisease.db');

const SectionCard1 = ({ stepNumber }) => {
  const [otherPlant, setOtherPlant] = useState([]);
  const [weed, setWeed] = useState([]);
  const [plantDisease, setPlantDisease] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchOtherPlantData = async () => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM OtherPlant ORDER BY id DESC',
          [],
          (tx, results) => {
            let data = [];
            for (let i = 0; i < results.rows.length; i++) {
              data.push(results.rows.item(i));
            }
            setOtherPlant(data);
          },
          (tx, error) => {
            console.error('Error fetching data:', error);
          }
        );
      });
    };

    const fetchWeedData = async () => {
      weedDb.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Weed ORDER BY id DESC',
          [],
          (tx, results) => {
            let data = [];
            for (let i = 0; i < results.rows.length; i++) {
              data.push(results.rows.item(i));
            }
            setWeed(data);
          },
          (tx, error) => {
            console.error('Error fetching data:', error);
          }
        );
      });
    };

    const fetchPlantDiseaseData = async () => {
      plantDiseaseDb.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM PlantDisease ORDER BY id DESC',
          [],
          (tx, results) => {
            let data = [];
            for (let i = 0; i < results.rows.length; i++) {
              data.push(results.rows.item(i));
            }
            setPlantDisease(data);
          },
          (tx, error) => {
            console.error('Error fetching data:', error);
          }
        );
      });
    };

    fetchOtherPlantData();
    fetchWeedData();
    fetchPlantDiseaseData();
  }, [isFocused]);

  return (
    <View style={[styles.frameParent, styles.frameSpaceBlock]}>
      <View style={styles.frameGroup}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.text}>{stepNumber}</Text>
          
        </View>
      </View>
      {otherPlant.length > 0 && weed.length > 0 && plantDisease.length > 0 && (
        <View style={styles.frameSpaceBlock}>
          <View style={styles.frameContainer}>
            <View style={styles.group}>
              <Text style={styles.text2}>เรื่อง</Text>
              <View style={styles.container}>
                {otherPlant.map((item, index) => (
                  <Text key={`otherPlant-${index}`} style={styles.textTypo1}>{item.plantType}</Text>
                ))}
                {weed.map((item, index) => (
                  <Text key={`weed-${index}`} style={styles.textTypo1}>{item.weed}</Text>
                ))}
                {plantDisease.map((item, index) => (
                  <Text key={`plantDisease-${index}`} style={styles.textTypo1}>{item.disease}</Text>
                ))}
              </View>
            </View>
            <View style={styles.parent1}>
              <Text style={styles.text2}>ปริมาณ</Text>
              <View style={styles.container}>
                {otherPlant.map((item, index) => (
                  <Text key={`otherPlantAmount-${index}`} style={styles.textTypo}>{item.amount}</Text>
                ))}
                {weed.map((item, index) => (
                  <Text key={`weedAmount-${index}`} style={styles.textTypo}>{item.amount}</Text>
                ))}
                {plantDisease.map((item, index) => (
                  <Text key={`plantDiseaseAmount-${index}`} style={styles.textTypo}>{item.amount}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  systemLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  textTypo1: {
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.bodyB4Regular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "right",
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    lineHeight: 30,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  systemIconsedit: {
    marginLeft: 8,
  },
  systemIconsdeleteParent: {
    marginLeft: 8,
  },
  parent: {
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    color: Color.baseColourBase500,
    fontFamily: FontFamily.bodyB4Regular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameGroup: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  text4: {
    marginTop: 1,
  },
  container: {
    alignSelf: "stretch",
  },
  group: {
    flex: 1,
  },
  text11: {
    marginTop: 1,
  },
  parent1: {
    marginLeft: 12,
    flex: 1,
  },
  frameContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    padding: Padding.p_5xs,
    justifyContent: "center",
  },
});

export default SectionCard1;
