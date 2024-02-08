import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Toolbar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={styles.text}>จัดการแปลง</Text>
      <View style={styles.frameParent}>
        <View style={styles.frameFlexBox}>
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image32Icon}
              resizeMode="cover"
              source={require("../assets/image-32.png")}
            />
          </View>
          <Text style={styles.text1}>แผนปลูก</Text>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image32Icon}
              resizeMode="cover"
              source={require("../assets/image-35.png")}
            />
          </View>
          <Text style={styles.text1}>สำรวจ</Text>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image32Icon}
              resizeMode="cover"
              source={require("../assets/image-33.png")}
            />
          </View>
          <Text style={styles.text1}>สมาชิก</Text>
        </View>
        <Pressable
          style={[styles.frameContainer, styles.frameFlexBox]}
          onPress={() => navigation.navigate("Screen5")}
        >
          <View style={styles.wrapperShadowBox}>
            <Image
              style={styles.image32Icon}
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
  image32Icon: {
    width: 40,
    height: 40,
  },
  wrapperShadowBox: {
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 32,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: "rgba(6, 28, 61, 0.08)",
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
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 16,
    shadowOpacity: 1,
    elevation: 32,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: "rgba(6, 28, 61, 0.08)",
  },
});

export default Toolbar1;
