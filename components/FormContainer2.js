import React, { useMemo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer2 = ({ propMarginTop }) => {
  const frameView7Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.frameWrapper, frameView7Style]}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.frameGroup}>
          <View
            style={[styles.foodgrainsOfRiceWrapper, styles.frameParentFlexBox]}
          >
            <Image
              style={styles.foodgrainsOfRiceIcon}
              resizeMode="cover"
              source={require("../assets/2-foodgrainsofrice.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>
              เมล็ดพันธุ์พืช
            </Text>
            <Text style={[styles.text1, styles.textFlexBox]}>1แปลง</Text>
          </View>
        </View>
        <Text style={[styles.text2, styles.textTypo]}>฿2,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  foodgrainsOfRiceIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  foodgrainsOfRiceWrapper: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    justifyContent: "center",
    padding: Padding.p_5xs,
  },
  text: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  text1: {
    fontFamily: FontFamily.bodyB4Regular,
  },
  parent: {
    marginLeft: 15,
    flex: 1,
  },
  frameGroup: {
    width: 140,
    flexDirection: "row",
  },
  text2: {
    lineHeight: 18,
    color: Color.textLinkColourTextLinkSecondary,
    textAlign: "right",
    display: "flex",
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
});

export default FormContainer2;
