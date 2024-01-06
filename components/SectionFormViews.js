import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FormContainer2 from "./FormContainer2";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const SectionFormViews = () => {
  return (
    <View style={styles.parentSpaceBlock}>
      <Text style={[styles.text, styles.textClr]}>จัดการแปลง</Text>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.parentFlexBox}>
          <FormContainer2 />
          <Text style={[styles.text1, styles.textClr]}>แผนปลูก</Text>
        </View>
        <View
          style={[
            styles.basilIconssolidsolidcommunParent,
            styles.parentFlexBox,
          ]}
        >
          <View style={styles.basilIconssolidsolidcommun}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <Text style={[styles.text1, styles.textClr]}>สมาชิก</Text>
        </View>
        <View
          style={[
            styles.basilIconssolidsolidcommunParent,
            styles.parentFlexBox,
          ]}
        >
          <View style={styles.basilIconssolidsolidcommun}>
            <Image
              style={[styles.icon1, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon2.png")}
            />
          </View>
          <Text style={[styles.text1, styles.textClr]}>สำรวจ</Text>
        </View>
        <View
          style={[
            styles.basilIconssolidsolidcommunParent,
            styles.parentFlexBox,
          ]}
        >
          <View style={styles.basilIconssolidsolidcommun}>
            <Image
              style={[styles.icon2, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon3.png")}
            />
          </View>
          <Text style={[styles.text1, styles.textClr]}>GAP</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    padding: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.success50,
    borderRadius: Border.br_5xs,
    flex: 1,
  },
  iconPosition: {
    top: "9.38%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "17.81%",
    right: "17.5%",
    width: "64.69%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.selectorS6SemiBold,
    textAlign: "left",
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    fontFamily: FontFamily.iBMPlexSansThaiRegular,
    textAlign: "center",
    marginTop: 4,
  },
  icon: {
    height: "68.75%",
    top: "15.63%",
    bottom: "15.63%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "17.81%",
    right: "17.5%",
    width: "64.69%",
    position: "absolute",
  },
  basilIconssolidsolidcommun: {
    width: 32,
    height: 32,
  },
  basilIconssolidsolidcommunParent: {
    marginLeft: 16,
  },
  icon1: {
    height: "84.38%",
    bottom: "6.25%",
  },
  icon2: {
    height: "81.25%",
    bottom: "9.38%",
  },
  frameParent: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
});

export default SectionFormViews;
