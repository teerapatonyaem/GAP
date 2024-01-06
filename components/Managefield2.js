import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Managefield2 = () => {
  return (
    <View style={styles.parentSpaceBlock}>
      <Text style={[styles.text, styles.textClr]}>จัดการแปลง</Text>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconixtolinearplant2}
            resizeMode="cover"
            source={require("../assets/iconixtolinearplant21.png")}
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
            source={require("../assets/basil-iconssolidsolidcommunicationuser.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconixtolinearplant2}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinefilesclipboardalt.png")}
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
    color: Color.labelColorLightPrimary,
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
  },
});

export default Managefield2;
