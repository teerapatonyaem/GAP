import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Frame1 = ({
  component5,
  property1Frame1000001566Position,
  property1Frame1000001566AlignSelf,
  property1Frame1000001566MarginTop,
}) => {
  const property1Frame1000001566Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Frame1000001566Position),
      ...getStyleValue("alignSelf", property1Frame1000001566AlignSelf),
      ...getStyleValue("marginTop", property1Frame1000001566MarginTop),
    };
  }, [
    property1Frame1000001566Position,
    property1Frame1000001566AlignSelf,
    property1Frame1000001566MarginTop,
  ]);

  return (
    <View
      style={[
        styles.property1frame1000001566,
        styles.frameParentSpaceBlock,
        property1Frame1000001566Style,
      ]}
    >
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.parent, styles.parentFrameFlexBox]}>
          <Text style={styles.text}>วันนี้</Text>
          <Text style={[styles.text1, styles.textTypo]}>30 พ.ย.</Text>
        </View>
        <Image
          style={styles.component5Icon}
          resizeMode="cover"
          source={component5}
        />
        <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
          <View style={styles.frameParentFlexBox}>
            <Image
              style={styles.bithermometerHalfIcon}
              resizeMode="cover"
              source={require("../assets/bithermometerhalf.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>19°</Text>
          </View>
          <View style={styles.frameChild} />
          <View
            style={[styles.bithermometerHighParent, styles.frameParentFlexBox]}
          >
            <Image
              style={styles.bithermometerHalfIcon}
              resizeMode="cover"
              source={require("../assets/bithermometerhigh.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>27°</Text>
          </View>
        </View>
        <View style={styles.component6}>
          <Text style={[styles.text4, styles.textTypo]}>แดดออก</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentSpaceBlock: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentFrameFlexBox: {
    flex: 1,
    justifyContent: "center",
  },
  textTypo: {
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.labelColorLightPrimary,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    textAlign: "left",
  },
  parent: {
    alignItems: "center",
    flex: 1,
  },
  component5Icon: {
    width: 33,
    height: 33,
    marginLeft: 8,
    overflow: "hidden",
  },
  bithermometerHalfIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text2: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.bodyB4Regular,
  },
  frameChild: {
    backgroundColor: Color.colorGainsboro_200,
    width: 2,
    height: 24,
    marginLeft: 6,
  },
  bithermometerHighParent: {
    marginLeft: 6,
  },
  frameGroup: {
    marginLeft: 8,
    flex: 1,
    justifyContent: "center",
  },
  text4: {
    position: "absolute",
    width: "100%",
    top: "0%",
    left: "0%",
    textAlign: "center",
    display: "flex",
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.bodyB4Regular,
    justifyContent: "center",
    alignItems: "center",
  },
  component6: {
    width: 85,
    height: 22,
    marginLeft: 8,
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  property1frame1000001566: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(59, 89, 152, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default Property1Frame1;
