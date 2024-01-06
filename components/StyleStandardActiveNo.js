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
}) => {
  const styleStandardActiveNoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", styleStandardActiveNoPosition),
    };
  }, [styleStandardActiveNoPosition]);

  return (
    <View style={[styles.stylestandardActiveno, styleStandardActiveNoStyle]}>
      <Image style={styles.menuIcon} resizeMode="cover" source={menuIcon} />
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    width: 28,
    height: 28,
  },
  label: {
    fontSize: FontSize.selectorS6Regular_size,
    lineHeight: 14,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "center",
    marginTop: 4,
  },
  stylestandardActiveno: {
    alignItems: "center",
  },
});

export default StyleStandardActiveNo;
