import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PlotInformation = () => {
  return (
    <View style={[styles.parent, styles.parentSpaceBlock]}>
      <Text style={styles.text}>ข้อมูลแปลง</Text>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.group}>
          <Text style={styles.textTypo1}>พันธุ์ข้าว</Text>
          <Text
            style={[styles.text2, styles.textTypo1]}
          >{`จำนวนพื้นที่ `}</Text>
          <Text style={[styles.text2, styles.textTypo1]}>วันที่ปลูก</Text>
          <Text style={[styles.text2, styles.textTypo1]}>วิธีการปลูก</Text>
          <Text style={[styles.text2, styles.textTypo1]}>ชนิดของดิน</Text>
          <Text style={[styles.text2, styles.textTypo1]}>แหล่งน้ำ</Text>
          <Text style={[styles.text2, styles.textTypo1]}>สถานที่แปลง</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo}>กข 16</Text>
          <Text style={[styles.text9, styles.textTypo]}>12 ไร่</Text>
          <Text style={[styles.text9, styles.textTypo]}>12/05/2554</Text>
          <Text style={[styles.text9, styles.textTypo]}>หว่านน้ำตม</Text>
          <Text style={[styles.text9, styles.textTypo]}>ดินร่วนปนทราย</Text>
          <Text style={[styles.text9, styles.textTypo]}>ชลประทาน</Text>
          <Text style={[styles.text9, styles.textTypo]}>{`บ้านบุฝ้าย
อำเภอประจันตคาม
จังหวัดปราจีนบุุรี`}</Text>
        </View>
      </View>
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
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.selectorS4Regular_size,
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
    backgroundColor: Color.baseColourWhite,
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

export default PlotInformation;
