import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultOptionListOff = ({
  text = "Placeholder",
  stateDefaultOptionListOffPosition,
  stateDefaultOptionListOffAlignSelf,
}) => {
  const stateDefaultOptionListOffStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultOptionListOffPosition),
      ...getStyleValue("alignSelf", stateDefaultOptionListOffAlignSelf),
    };
  }, [stateDefaultOptionListOffPosition, stateDefaultOptionListOffAlignSelf]);

  return (
    <View
      style={[styles.statedefaultOptionListoff, stateDefaultOptionListOffStyle]}
    >
      <Text style={styles.text}>{text}</Text>
      <Image
        style={styles.systemIconscollapseExpand}
        resizeMode="cover"
        source={require("../assets/1-system-iconscollapseexpand.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "left",
  },
  systemIconscollapseExpand: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 8,
  },
  statedefaultOptionListoff: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    flex: 1,
  },
});

export default StateDefaultOptionListOff;
