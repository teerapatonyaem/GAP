import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormSection = ({
  onFramePressablePress,
  onFramePressablePress1,
  onFramePressablePress2,
  onFramePressablePress3,
}) => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>จัดการแปลง</Text>
      <View style={styles.frameParent}>
        <Pressable style={styles.frameFlexBox} onPress={onFramePressablePress}>
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image35Icon}
              resizeMode="cover"
              source={require("../assets/image-35.png")}
            />
          </View>
          <Text style={styles.text1}>สำรวจ</Text>
        </Pressable>
        <Pressable
          style={[styles.frameContainer, styles.frameFlexBox]}
          onPress={onFramePressablePress1}
        >
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image35Icon}
              resizeMode="cover"
              source={require("../assets/image-33.png")}
            />
          </View>
          <Text style={styles.text1}>สมาชิก</Text>
        </Pressable>
        <Pressable
          style={[styles.frameContainer, styles.frameFlexBox]}
          onPress={onFramePressablePress2}
        >
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image35Icon}
              resizeMode="cover"
              source={require("../assets/image-37.png")}
            />
          </View>
          <Text style={styles.text1}>องค์ความรู้</Text>
        </Pressable>
        <Pressable
          style={[styles.frameContainer, styles.frameFlexBox]}
          onPress={onFramePressablePress3}
        >
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image35Icon}
              resizeMode="cover"
              source={require("../assets/image-34.png")}
            />
          </View>
          <Text style={styles.text1}>ยื่น GAP</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  image35Icon: {
    width: 40,
    height: 40,
  },
  wrapperShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    textAlign: "center",
    marginTop: 4,
    alignSelf: "stretch",
    color: Color.labelColorLightPrimary,
  },
  frameContainer: {
    marginLeft: 8,
  },
  frameParent: {
    flexDirection: "row",
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  parent: {
    shadowColor: "rgba(6, 28, 61, 0.08)",
    shadowRadius: 32,
    elevation: 32,
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
});

export default FormSection;
