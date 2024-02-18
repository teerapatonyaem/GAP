import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SectionCard1 = ({ stepNumber }) => {
  return (
    <View style={[styles.frameParent, styles.frameSpaceBlock]}>
      <View style={styles.frameGroup}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.text}>{stepNumber}</Text>
          <View style={[styles.systemIconsdeleteParent, styles.parentFlexBox]}>
            <Image
              style={styles.systemLayout}
              resizeMode="cover"
              source={require("../assets/1-system-iconsdelete.png")}
            />
            <Image
              style={[styles.systemIconsedit, styles.systemLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsedit.png")}
            />
          </View>
        </View>
        <Text style={styles.text1}>
          วัน อาทิตย์ ที่ 2 ธันวาคม พ.ศ.2566 เวลา 13.00 น.
        </Text>
      </View>
      <View style={styles.frameSpaceBlock}>
        <View style={styles.frameContainer}>
          <View style={styles.group}>
            <Text style={styles.text2}>พืชชนิดอื่น</Text>
            <View style={styles.container}>
              <Text style={styles.textTypo1}>หญ้า</Text>
              <Text style={[styles.text4, styles.textTypo1]}>หญ้า</Text>
              <Text style={[styles.text4, styles.textTypo1]}>หญ้า</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.textTypo1}>หญ้า</Text>
              <Text style={[styles.text4, styles.textTypo1]}>หญ้า</Text>
              <Text style={[styles.text4, styles.textTypo1]}>หญ้า</Text>
            </View>
          </View>
          <View style={styles.parent1}>
            <Text style={styles.text2}>ปริมาณ</Text>
            <View style={styles.container}>
              <Text style={styles.textTypo}>มาก</Text>
              <Text style={[styles.text11, styles.textTypo]}>น้อย</Text>
              <Text style={[styles.text11, styles.textTypo]}>กลาง</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.textTypo}>มาก</Text>
              <Text style={[styles.text11, styles.textTypo]}>น้อย</Text>
              <Text style={[styles.text11, styles.textTypo]}>กลาง</Text>
            </View>
          </View>
        </View>
      </View>
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
