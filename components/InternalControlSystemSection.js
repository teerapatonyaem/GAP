import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import SelectionControl from "./SelectionControl";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const InternalControlSystemSection = () => {
  return (
    <View style={[styles.parent, styles.text6SpaceBlock]}>
      <Text style={[styles.text, styles.textTypo]}>
        ระบบการควบคุมภายในที่มี
      </Text>
      <View style={[styles.group, styles.groupFlexBox]}>
        <Text style={[styles.text1, styles.textTypo]}>
          สัญญา/ใบสมัคร/คำรับรอง และหลักเกณฑ์และเงื่อไขของกลุ่ม
        </Text>
        <SelectionControl
          label="Checkbox"
          showLabel={false}
          selectionControlPosition="unset"
          checkboxStateWidth={24}
          checkboxStateHeight={24}
          checkboxStateRight="unset"
          checkboxStateBottom="unset"
          rectangleBorderRadius={6}
        />
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text2, styles.textTypo]}>
          การตรวจติดตามคุณภาพภายใน และการปฏิบัติแก้ไข
        </Text>
        <SelectionControl
          label="Checkbox"
          showLabel={false}
          selectionControlPosition="unset"
          checkboxStateWidth={24}
          checkboxStateHeight={24}
          checkboxStateRight="unset"
          checkboxStateBottom="unset"
          rectangleBorderRadius={6}
        />
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>
          การจัดการขอร้องเรียน
        </Text>
        <SelectionControl
          label="Checkbox"
          showLabel={false}
          selectionControlPosition="unset"
          checkboxStateWidth={24}
          checkboxStateHeight={24}
          checkboxStateRight="unset"
          checkboxStateBottom="unset"
          rectangleBorderRadius={6}
        />
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>
          การควบคุมเอกสาร และบันทึก
        </Text>
        <SelectionControl
          label="Checkbox"
          showLabel={false}
          selectionControlPosition="unset"
          checkboxStateWidth={24}
          checkboxStateHeight={24}
          checkboxStateRight="unset"
          checkboxStateBottom="unset"
          rectangleBorderRadius={6}
        />
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>การฝึกอบรม</Text>
        <SelectionControl
          label="Checkbox"
          showLabel={false}
          selectionControlPosition="unset"
          checkboxStateWidth={24}
          checkboxStateHeight={24}
          checkboxStateRight="unset"
          checkboxStateBottom="unset"
          rectangleBorderRadius={6}
        />
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>{`ระบบการตามสอบผลิตผล 
(Traceability of Produce)`}</Text>
        <SelectionControl
          label="Checkbox"
          showLabel={false}
          selectionControlPosition="unset"
          checkboxStateWidth={24}
          checkboxStateHeight={24}
          checkboxStateRight="unset"
          checkboxStateBottom="unset"
          rectangleBorderRadius={6}
        />
      </View>
      <Text style={[styles.text6, styles.textTypo]}>อื่นๆ โปรดระบุ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text6SpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
  },
  groupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
  text: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
  },
  text1: {
    width: 396,
  },
  group: {
    alignItems: "center",
  },
  text2: {
    flex: 1,
  },
  text6: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  parent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
});

export default InternalControlSystemSection;
