import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const SectionCardForm = () => {
  return (
    <View style={[styles.parent, styles.parentFlexBox]}>
      <Text style={styles.text}>การปฏิบัติงานล่าสุด</Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>เรื่อง</Text>
          <Text style={[styles.text2, styles.textTypo]}>ตัดหญ้า</Text>
          <Text style={[styles.text2, styles.textTypo]}>ใส่ปุ๋ย</Text>
          <Text style={[styles.text2, styles.textTypo]}>พ่นยา</Text>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>จำนวน</Text>
          <Text style={[styles.text2, styles.textTypo]}>2 ไร่</Text>
          <Text style={[styles.text2, styles.textTypo]}>4 ไร่</Text>
          <Text style={[styles.text2, styles.textTypo]}>4 ไร่</Text>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>ค่าใช้จ่าย</Text>
          <Text style={[styles.text2, styles.textTypo]}>100</Text>
          <Text style={[styles.text2, styles.textTypo]}>1500</Text>
          <Text style={[styles.text2, styles.textTypo]}>4500</Text>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>รายละเอียด</Text>
          <Text style={[styles.text2, styles.textTypo]}>นำมันเครื่อง</Text>
          <Text style={[styles.text2, styles.textTypo]}>15-15-15</Text>
          <Text style={[styles.text2, styles.textTypo]}>อีเขียนนาโน</Text>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>เพิ่มเติม</Text>
          <Text style={[styles.text2, styles.textTypo]}>หญ้าเยอะ</Text>
          <Text style={[styles.text2, styles.textTypo]}>เร่งราก</Text>
          <Text style={[styles.text2, styles.textTypo]}>เร่งผล</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignSelf: "stretch",
    marginTop: 8,
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.bodyB4Regular,
    textAlign: "left",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
  },
  text1: {
    color: Color.labelColorLightPrimary,
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
    fontFamily: FontFamily.bodyB4Regular,
  },
  text2: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    color: Color.baseColourBase500,
    marginTop: 8,
  },
  group: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  frameParent: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
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
    padding: Padding.p_5xs,
    marginTop: 8,
    alignItems: "center",
  },
});

export default SectionCardForm;
