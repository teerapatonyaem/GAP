import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const db = SQLite.openDatabase({
  name: 'plot.db', 
  location: 'default',   
});

const GAPCertifyPlanytype = () => {
  const [plot, setPlot] = useState(null); 

  useEffect(() => {
    const fetchPlot = async () => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT rice_variety FROM plot WHERE plot_id = ?',
          [1], // You might want to replace this with the actual plot_id you're interested in
          (tx, results) => {
            if (results.rows.length > 0) {
              setPlot(results.rows.item(0).rice_variety);
            }
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
      });
    };

    fetchPlot();
  }, []);

  return (
    <View style={styles.input}>
      <View style={styles.label}>
        <Text style={[styles.label1, styles.textTypo]}>ชนิดพืช</Text>
        <Image
          style={[styles.systemIconsinfo, styles.systemCommon]}
          resizeMode="cover"
          source={require("../assets/1-system-iconsinfo2.png")}
        />
      </View>
      <View style={styles.input1}>
        <View style={styles.textfield}>
          <Image
            style={[styles.systemIconshome, styles.systemCommon]}
            resizeMode="cover"
            source={require("../assets/1-system-iconshome2.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>
            {plot ? plot.rice_variety : 'Loading...'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  systemCommon: {
    display: "none",
    overflow: "hidden",
  },
  label1: {
    color: Color.descriptiveTextColourTextNormal700,
  },
  systemIconsinfo: {
    width: 18,
    height: 18,
    marginLeft: 4,
  },
  label: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconshome: {
    width: 24,
    height: 24,
  },
  text: {
    color: Color.neutralColourOnBaseBG800,
    marginLeft: 8,
    flex: 1,
  },
  textfield: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray00,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    flexDirection: "row",
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default GAPCertifyPlanytype;
