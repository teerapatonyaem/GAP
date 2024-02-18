import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusActiveLargeFalse = ({
  active,
  statusActiveLargeFalsePosition,
  statusActiveLargeFalseFlex,
  statusActiveLargeFalseBackgroundColor,
  statusActiveLargeFalseMarginLeft,
  activeColor,
}) => {
  const statusActiveLargeFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusActiveLargeFalsePosition),
      ...getStyleValue("flex", statusActiveLargeFalseFlex),
      ...getStyleValue(
        "backgroundColor",
        statusActiveLargeFalseBackgroundColor
      ),
      ...getStyleValue("marginLeft", statusActiveLargeFalseMarginLeft),
    };
  }, [
    statusActiveLargeFalsePosition,
    statusActiveLargeFalseFlex,
    statusActiveLargeFalseBackgroundColor,
    statusActiveLargeFalseMarginLeft,
  ]);

  const activeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", activeColor),
    };
  }, [activeColor]);

  return (
    <View style={[styles.statusactiveLargefalse, statusActiveLargeFalseStyle]}>
      <Text style={[styles.active, activeStyle]}>{active}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyXXL400,
    color: Color.primary500,
    textAlign: "center",
  },
  statusactiveLargefalse: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
  },
});

export default StatusActiveLargeFalse;
