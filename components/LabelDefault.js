import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LabelDefault = ({
  textLabel = "Label",
  systemIconsInfo,
  showInfoIcon = false,
  labelDefaultPosition,
  labelDefaultAlignSelf,
}) => {
  const labelDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", labelDefaultPosition),
      ...getStyleValue("alignSelf", labelDefaultAlignSelf),
    };
  }, [labelDefaultPosition, labelDefaultAlignSelf]);

  return (
    <View style={[styles.labeldefault, labelDefaultStyle]}>
      <Text style={styles.label}>{textLabel}</Text>
      {showInfoIcon && (
        <Image
          style={styles.systemIconsinfo}
          resizeMode="cover"
          source={systemIconsInfo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
  },
  systemIconsinfo: {
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
    marginLeft: 4,
  },
  labeldefault: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LabelDefault;
