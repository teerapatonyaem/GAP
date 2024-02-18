import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDisable = ({
  systemIconsHome,
  text = "Placeholder",
  showIcon = false,
  stateDisablePosition,
  stateDisableBackgroundColor,
  textColor,
}) => {
  const stateDisableStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDisablePosition),
      ...getStyleValue("backgroundColor", stateDisableBackgroundColor),
    };
  }, [stateDisablePosition, stateDisableBackgroundColor]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.statedisable, stateDisableStyle]}>
      {showIcon && (
        <Image
          style={styles.systemIconshome}
          resizeMode="cover"
          source={systemIconsHome}
        />
      )}
      <Text style={[styles.text, text1Style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  systemIconshome: {
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  text: {
    flex: 1,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "left",
    marginLeft: 8,
  },
  statedisable: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.disableLightDisableLight,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    flex: 1,
  },
});

export default StateDisable;
