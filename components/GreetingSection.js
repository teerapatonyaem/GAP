import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GreetingSection = () => {
  return (
    <View style={styles.frameWrapper}>
      <View style={styles.frameParent}>
        <View style={styles.avatarParent}>
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>สวัสดี</Text>
            <Text style={[styles.text1, styles.textTypo]}>เกษตรกร</Text>
          </View>
        </View>
        <Image
          style={styles.iconixtolinearnotificationU}
          resizeMode="cover"
          source={require("../assets/iconixtolinearnotificationunread.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
  },
  avatarIcon: {
    width: 48,
    height: 48,
  },
  text: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  text1: {
    textAlign: "center",
  },
  parent: {
    marginLeft: 24,
  },
  avatarParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconixtolinearnotificationU: {
    width: 24,
    height: 24,
  },
  frameParent: {
    width: 412,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    paddingTop: Padding.p_9xl,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GreetingSection;
