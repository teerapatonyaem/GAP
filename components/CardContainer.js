import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import TypeTextArea from "./TypeTextArea";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardContainer = ({
  otherItemsSoilType,
  itemCode,
  transactionButtonText,
  dimensionCode,
  propAlignSelf,
  propWidth,
  propMarginTop,
  propAlignSelf1,
  propPosition,
  propHeight,
  propPosition1,
  propWidth1,
  propHeight1,
  propOverflow,
  propMarginLeft,
  propRight,
  propBottom,
}) => {
  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propAlignSelf, propWidth, propMarginTop]);

  const stateDefaultOptionListOffStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf1),
      ...getStyleValue("position", propPosition),
    };
  }, [propAlignSelf1, propPosition]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const systemIconsCollapseExpandStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition1),
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("overflow", propOverflow),
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
    };
  }, [
    propPosition1,
    propWidth1,
    propHeight1,
    propOverflow,
    propMarginLeft,
    propRight,
    propBottom,
  ]);

  return (
    <View style={[styles.input, inputStyle]}>
      <View style={styles.label}>
        <Text style={styles.label1}>{otherItemsSoilType}</Text>
        <Image style={styles.iconStatus} resizeMode="cover" source={itemCode} />
      </View>
      <TypeTextArea
        text="เลือกทำรายการ"
        iconsStrech={require("../assets/1-system-iconscollapseexpand.png")}
        typeTextAreaPosition="unset"
        typeTextAreaMarginTop={4}
        textAreaPosition="unset"
        textAreaAlignSelf="stretch"
        textHeight="unset"
        iconsStrechPosition="relative"
        iconsStrechRight="unset"
        iconsStrechBottom="unset"
        iconsStrechWidth={24}
        iconsStrechHeight={24}
        iconsStrechOverflow="hidden"
        iconsStrechMarginLeft={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label1: {
    flex: 1,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
  },
  iconStatus: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    alignSelf: "stretch",
  },
});

export default CardContainer;
