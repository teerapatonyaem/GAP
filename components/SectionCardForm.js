import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SQLite from "react-native-sqlite-storage";
import UserContext from "../components/UserContext";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const db = SQLite.openDatabase({
  name: 'general.db',
  location: 'default',
});

const SectionCardForm = () => {
  const { user } = useContext(UserContext);
  const [general, setGeneral] = useState(null);

  useEffect(() => {
    const fetchGeneralData = async () => {
      if (user) {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM general WHERE user_id = ? ORDER BY id DESC LIMIT 1',
            [user.id],
            (tx, results) => {
              if (results.rows.length > 0) {
                setGeneral(results.rows.item(0));
              }
            },
            (error) => {
              console.error('Error fetching data:', error);
            }
          );
        });
      }
    };

    fetchGeneralData();
  }, [user]);

  return (
    <View style={[styles.parent, styles.parentSpaceBlock]}>
      <Text style={styles.text}>การปฏิบัติงานล่าสุด{`(งานทั่วไป) `}</Text>
      {general ? (
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={styles.group}>
            <Text style={styles.textTypo1}>เรื่อง</Text>
            <Text style={[styles.text2, styles.textTypo1]}>{`จำนวน `}</Text>
            <Text style={[styles.text2, styles.textTypo1]}>ค่าใช้จ่าย</Text>
            <Text style={[styles.text2, styles.textTypo1]}>รายละเอียด</Text>
            <Text style={[styles.text2, styles.textTypo1]}>เพิ่มเติม</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.textTypo}>{general.job}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{general.quantity} ไร่</Text>
            <Text style={[styles.text9, styles.textTypo]}>{general.cost}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{general.costDetails}</Text>
            <Text style={[styles.text9, styles.textTypo]}>{general.additional}</Text>
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

export default SectionCardForm;
