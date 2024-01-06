import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Fieldbannerinfo = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.image31Parent}
      onPress={() => navigation.navigate("AndroidLarge3")}
    >
      <Image
        style={styles.image31Icon}
        resizeMode="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>
          นาแปลงใหญ่กลุ่มเขียว
        </Text>
        <View style={styles.frameParent}>
          <View style={[styles.wrapper, styles.frameFlexBox]}>
            <Text style={[styles.text1, styles.textFlexBox]}>12 ไร่ 1 งาน</Text>
          </View>
          <View style={[styles.container, styles.frameFlexBox]}>
            <Text style={[styles.text1, styles.textFlexBox]}>
              ปลูก 15/11/2566
            </Text>
          </View>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Text style={[styles.text1, styles.textFlexBox]}>
              เก็บ 15/11/2566
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  frameFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  image31Icon: {
    borderRadius: Border.br_base,
    width: 88,
    height: 58,
  },
  text: {
    fontSize: FontSize.headerH6SemiBold_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.bodyBH5SemiBold,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  text1: {
    fontSize: FontSize.bodyB6Regular_size,
    lineHeight: 18,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
  },
  wrapper: {
    backgroundColor: Color.primaryColourPrimaryCont,
  },
  container: {
    backgroundColor: Color.secondaryColourSecondaryCont,
    marginLeft: 8,
  },
  frame: {
    backgroundColor: Color.warningColourWarningContainer100,
    marginLeft: 8,
  },
  frameParent: {
    flexWrap: "wrap",
    marginTop: 7,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  parent: {
    marginLeft: 8,
  },
  image31Parent: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Fieldbannerinfo;
