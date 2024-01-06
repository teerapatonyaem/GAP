import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const Workfertilizer = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>การปฏิบัติงานในแปลง(ใส่ปุ๋ย)</Text>
      <View style={styles.input}>
        <View style={styles.labelFlexBox}>
          <Text style={[styles.label1, styles.text1Typo]}>งานที่ปฏิบัติ</Text>
          <Image
            style={styles.iconStatus}
            resizeMode="cover"
            source={require("../assets/icon-status.png")}
          />
        </View>
        <View style={[styles.input1, styles.labelFlexBox]}>
          <View style={[styles.textfield, styles.swapItemSpaceBlock]}>
            <Image
              style={styles.systemIconshome}
              resizeMode="cover"
              source={require("../assets/1-system-iconshome2.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>งานที่ปฏิบัติ</Text>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <View style={styles.labelFlexBox}>
          <Text style={[styles.label1, styles.text1Typo]}>ปุ๋ยที่ใช้</Text>
          <Image
            style={styles.iconStatus}
            resizeMode="cover"
            source={require("../assets/icon-status.png")}
          />
        </View>
        <View style={[styles.input1, styles.labelFlexBox]}>
          <View style={[styles.textfield, styles.swapItemSpaceBlock]}>
            <Image
              style={styles.systemIconshome}
              resizeMode="cover"
              source={require("../assets/1-system-iconshome2.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>สูตรปุ๋ย</Text>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <View style={styles.labelFlexBox}>
          <Text style={[styles.label1, styles.text1Typo]}>อัตราการใช้</Text>
          <Image
            style={styles.iconStatus}
            resizeMode="cover"
            source={require("../assets/icon-status.png")}
          />
        </View>
        <View style={[styles.input1, styles.labelFlexBox]}>
          <View style={[styles.textfield, styles.swapItemSpaceBlock]}>
            <Image
              style={styles.systemIconshome}
              resizeMode="cover"
              source={require("../assets/1-system-iconshome2.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>อัตราการใช้</Text>
          </View>
        </View>
      </View>
      <View style={[styles.cardswapComponent, styles.swapItemSpaceBlock]}>
        <View style={[styles.swapItem, styles.swapItemSpaceBlock]}>
          <Text style={[styles.swapComponent, styles.text1Typo]}>
            เพิ่มช่องข้อมูล
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    fontFamily: FontFamily.labelLB4Regular,
    textAlign: "left",
  },
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  swapItemSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.buttonBT5SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.labelLB4Regular_size,
    alignSelf: "stretch",
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
    flex: 1,
    fontSize: FontSize.labelLB4Regular_size,
    fontFamily: FontFamily.labelLB4Regular,
  },
  iconStatus: {
    width: 20,
    height: 20,
    marginLeft: 8,
    display: "none",
  },
  systemIconshome: {
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  text1: {
    color: Color.descriptiveTextColourTextLighter400,
    marginLeft: 8,
    flex: 1,
    lineHeight: 24,
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
  },
  textfield: {
    borderStyle: "solid",
    borderColor: Color.disableDefaultDisableDefault,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
  input1: {
    marginTop: 4,
  },
  input: {
    alignSelf: "stretch",
    marginTop: 8,
  },
  swapComponent: {
    fontSize: FontSize.buttonBT5SemiBold_size,
    lineHeight: 18,
    color: Color.primaryColourPrimary,
  },
  swapItem: {
    backgroundColor: Color.colorLavender_100,
    borderStyle: "dashed",
    borderColor: Color.colorRoyalblue,
    borderRadius: 0.001,
    justifyContent: "center",
    paddingHorizontal: Padding.p_102xl,
    overflow: "hidden",
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cardswapComponent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingHorizontal: 0,
    alignSelf: "stretch",
    marginTop: 8,
  },
  parent: {
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 380,
    padding: Padding.p_5xs,
    marginTop: 8,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
});

export default Workfertilizer;
