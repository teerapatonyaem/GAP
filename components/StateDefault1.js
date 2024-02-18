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
const StateDefault1 = ({
  systemIconsHome,
  text = "Placeholder",
  showIcon = false,
  stateDefaultPosition,
  stateDefaultAlignSelf,
}) => {
  const stateDefault1Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("alignSelf", stateDefaultAlignSelf),
    };
  }, [stateDefaultPosition, stateDefaultAlignSelf]);

  return (
    <View style={[styles.statedefault, stateDefault1Style]}>
      {showIcon && (
        <Image
          style={styles.systemIconshome}
          resizeMode="cover"
          source={systemIconsHome}
        />
      )}
      <Text style={styles.text}>{text}</Text>
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
  statedefault: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
});

export default StateDefault1;
