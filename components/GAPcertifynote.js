import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const GAPcertifynote = () => {
  return (
    <View style={[styles.parent, styles.text6SpaceBlock]}>
      <Text style={[styles.text, styles.textTypo]}>
        ระบบการควบคุมภายในที่มี
      </Text>
      <View style={[styles.group, styles.groupFlexBox]}>
        <Text style={[styles.text1, styles.textTypo]}>
          สัญญา/ใบสมัคร/คำรับรอง และหลักเกณฑ์และเงื่อไขของกลุ่ม
        </Text>
        <View style={styles.selectionControl}>
          <View style={styles.selectionTypeLayout}>
            <View style={[styles.checkboxState, styles.selectionTypeLayout]}>
              <View style={styles.checkboxErrorState}>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
          <Text style={[styles.checkbox, styles.textTypo]}>Checkbox</Text>
        </View>
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text2, styles.textTypo]}>
          การตรวจติดตามคุณภาพภายใน และการปฏิบัติแก้ไข
        </Text>
        <View style={styles.selectionControl}>
          <View style={styles.selectionTypeLayout}>
            <View style={[styles.checkboxState, styles.selectionTypeLayout]}>
              <View style={styles.checkboxErrorState}>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
          <Text style={[styles.checkbox, styles.textTypo]}>Checkbox</Text>
        </View>
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>
          การจัดการขอร้องเรียน
        </Text>
        <View style={styles.selectionControl}>
          <View style={styles.selectionTypeLayout}>
            <View style={[styles.checkboxState, styles.selectionTypeLayout]}>
              <View style={styles.checkboxErrorState}>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
          <Text style={[styles.checkbox, styles.textTypo]}>Checkbox</Text>
        </View>
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>
          การควบคุมเอกสาร และบันทึก
        </Text>
        <View style={styles.selectionControl}>
          <View style={styles.selectionTypeLayout}>
            <View style={[styles.checkboxState, styles.selectionTypeLayout]}>
              <View style={styles.checkboxErrorState}>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
          <Text style={[styles.checkbox, styles.textTypo]}>Checkbox</Text>
        </View>
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>การฝึกอบรม</Text>
        <View style={styles.selectionControl}>
          <View style={styles.selectionTypeLayout}>
            <View style={[styles.checkboxState, styles.selectionTypeLayout]}>
              <View style={styles.checkboxErrorState}>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
          <Text style={[styles.checkbox, styles.textTypo]}>Checkbox</Text>
        </View>
      </View>
      <View style={styles.groupFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>{`ระบบการตามสอบผลิตผล 
(Traceability of Produce)`}</Text>
        <View style={styles.selectionControl}>
          <View style={styles.selectionTypeLayout}>
            <View style={[styles.checkboxState, styles.selectionTypeLayout]}>
              <View style={styles.checkboxErrorState}>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
          <Text style={[styles.checkbox, styles.textTypo]}>Checkbox</Text>
        </View>
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
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  groupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
  selectionTypeLayout: {
    height: 24,
    width: 24,
  },
  text: {
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
    alignSelf: "stretch",
  },
  text1: {
    width: 396,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  rectangle: {
    top: 2,
    left: 2,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray00,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 20,
    height: 20,
    position: "absolute",
  },
  checkboxErrorState: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  checkboxState: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  checkbox: {
    color: Color.descriptiveTextColourTextNormal700,
    display: "none",
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  selectionControl: {
    flexDirection: "row",
  },
  group: {
    alignItems: "center",
  },
  text2: {
    flex: 1,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  text6: {
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
    marginTop: 8,
    alignSelf: "stretch",
  },
  parent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
});

export default GAPcertifynote;
