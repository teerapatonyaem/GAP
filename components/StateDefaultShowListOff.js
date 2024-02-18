import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultShowListOff = ({
  text = "Placeholder",
  iconSearch = true,
  stateDefaultShowListOffPosition,
  stateDefaultShowListOffAlignSelf,
}) => {
  const stateDefaultShowListOffStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultShowListOffPosition),
      ...getStyleValue("alignSelf", stateDefaultShowListOffAlignSelf),
    };
  }, [stateDefaultShowListOffPosition, stateDefaultShowListOffAlignSelf]);

  return (
    <View
      style={[styles.statedefaultShowListoff, stateDefaultShowListOffStyle]}
    >
      {iconSearch && (
        <Image
          style={styles.systemIconssearch}
          resizeMode="cover"
          source={require("../assets/1-system-iconssearch.png")}
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  systemIconssearch: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
  statedefaultShowListoff: {
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
  },
});

export default StateDefaultShowListOff;
