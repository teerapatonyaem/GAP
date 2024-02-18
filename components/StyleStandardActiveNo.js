import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StyleStandardActiveNo = ({
  menuIcon,
  text = "Label",
  styleStandardActiveNoPosition,
  labelColor,
}) => {
  const styleStandardActiveNoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", styleStandardActiveNoPosition),
    };
  }, [styleStandardActiveNoPosition]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("color", labelColor),
    };
  }, [labelColor]);

  return (
    <View style={[styles.stylestandardActiveno, styleStandardActiveNoStyle]}>
      <Image style={styles.menuIcon} resizeMode="cover" source={menuIcon} />
      <Text style={[styles.label, labelStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    width: 28,
    height: 28,
  },
  label: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 14,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "center",
    marginTop: 4,
  },
  stylestandardActiveno: {
    alignItems: "center",
  },
});

export default StyleStandardActiveNo;
