import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SQLite from "react-native-sqlite-storage";
import UserContext from "../components/UserContext";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const db = SQLite.openDatabase({
  name: 'PlotDatabase.db',
  location: 'default',
});

const SectionForm2 = () => {
  const { user } = useContext(UserContext);
  const [plot, setPlot] = useState(null);

  useEffect(() => {
    const fetchPlotData = async () => {
      if (user) {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM plot WHERE user_id = ? ORDER BY plot_id DESC LIMIT 1',
            [user.id],
            (tx, results) => {
              if (results.rows.length > 0) {
                setPlot(results.rows.item(0));
              }
            },
            (error) => {
              console.error('Error fetching data:', error);
            }
          );
        });
      }
    };

    fetchPlotData();
  }, [user]);

  return (
    <View style={[styles.parent, styles.parentSpaceBlock]}>
      <Text style={styles.text}>ข้อมูลแปลง</Text>
      {plot ? (
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={styles.group}>
            <Text style={styles.textTypo1}>พันธุ์ข้าว</Text>
            <Text style={[styles.text2, styles.textTypo1]}>{`จำนวนพื้นที่ `}</Text>
            <Text style={[styles.text2, styles.textTypo1]}>วันที่ปลูก</Text>
            <Text style={[styles.text2, styles.textTypo1]}>วิธีการปลูก</Text>
            <Text style={[styles.text2, styles.textTypo1]}>ชนิดของดิน</Text>
            <Text style={[styles.text2, styles.textTypo1]}>แหล่งน้ำ</Text>
            <Text style={[styles.text2, styles.textTypo1]}>สถานที่แปลง</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.textTypo}>{plot.rice_variety}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{plot.area} ไร่</Text>
            <Text style={[styles.text9, styles.textTypo]}>{plot.planting_date}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{plot.planting_method}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{plot.soil_type}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{plot.water_source}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{plot.location}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.textTypo}>ไม่มีข้อมูลแปลง</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.colorGray_300,
    textAlign: "center",
    alignSelf: "stretch",
  },
  text2: {
    marginTop: 6,
  },
  group: {
    flex: 1,
  },
  text9: {
    marginTop: 6,
  },
  frameParent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parent: {
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
    height: 282,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default SectionForm2;
