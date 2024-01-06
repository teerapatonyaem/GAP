import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault = ({
  text = "Placeholder ",
  placeholderImageUrl,
  stateDefaultPosition,
  stateDefaultAlignSelf,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("alignSelf", stateDefaultAlignSelf),
    };
  }, [stateDefaultPosition, stateDefaultAlignSelf]);

  return (
    <View style={[styles.statedefault, stateDefaultStyle]}>
      <Text style={styles.text}>{text}</Text>
      <Image
        style={styles.systemIconscalendar}
        resizeMode="cover"
        source={placeholderImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "left",
  },
  systemIconscalendar: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 8,
  },
  statedefault: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray00,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
});

export default StateDefault;
