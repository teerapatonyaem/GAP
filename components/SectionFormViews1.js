import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FormContainer1 from "./FormContainer1";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const SectionFormViews1 = () => {
  return (
    <View style={styles.parentSpaceBlock}>
      <Text style={[styles.text, styles.textClr]}>จัดการแปลง</Text>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.parentFlexBox}>
          <FormContainer1 />
          <Text style={[styles.text1, styles.textClr]}>แผนปลูก</Text>
        </View>
        <View
          style={[
            styles.basilIconssolidsolidcommunParent,
            styles.parentFlexBox,
          ]}
        >
          <Image
            style={styles.basilIconssolidsolidcommun}
            resizeMode="cover"
            source={require("../assets/basil-iconssolidsolidcommunicationuser.png")}
          />
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
              style={styles.icon}
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
          <Image
            style={styles.basilIconssolidsolidcommun}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinefilesfiledownload.png")}
          />
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
  basilIconssolidsolidcommun: {
    width: 32,
    height: 32,
  },
  basilIconssolidsolidcommunParent: {
    marginLeft: 16,
  },
  icon: {
    position: "absolute",
    height: "84.38%",
    width: "64.69%",
    top: "9.38%",
    right: "17.5%",
    bottom: "6.25%",
    left: "17.81%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameParent: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
});

export default SectionFormViews1;
