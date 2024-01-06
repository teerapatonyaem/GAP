import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Managefarmmenu = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textClr]}>จัดการแปลง</Text>
      <View style={styles.frameParent}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconixtolinearplant2}
            resizeMode="cover"
            source={require("../assets/iconixtolinearplant22.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>แผนปลูก</Text>
        </View>
        <View
          style={[
            styles.basilIconssolidsolidcommunParent,
            styles.parentFlexBox,
          ]}
        >
          <Image
            style={styles.iconixtolinearplant2}
            resizeMode="cover"
            source={require("../assets/basil-iconssolidsolidcommunicationuser1.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>สมาชิก</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconixtolinearplant2}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinefilesclipboardalt1.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>สำรวจ</Text>
        </View>
        <View
          style={[
            styles.basilIconssolidsolidcommunParent,
            styles.parentFlexBox,
          ]}
        >
          <Image
            style={styles.iconixtolinearplant2}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinefilesfiledownload1.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>GAP</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.labelColorLightPrimary,
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
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    fontWeight: "600",
    fontFamily: FontFamily.bodyBH5SemiBold,
    textAlign: "left",
  },
  iconixtolinearplant2: {
    width: 32,
    height: 32,
  },
  text1: {
    fontSize: FontSize.bodyB6Regular_size,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    textAlign: "center",
    marginTop: 4,
  },
  basilIconssolidsolidcommunParent: {
    marginLeft: 16,
  },
  frameParent: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    alignSelf: "stretch",
  },
  parent: {
    width: 328,
  },
});

export default Managefarmmenu;
