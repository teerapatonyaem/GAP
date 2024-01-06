import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDatepicker = ({
  text,
  systemIconsCalendar,
  typeDatepickerPosition,
  typeDatepickerMarginTop,
}) => {
  const typeDatepickerStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeDatepickerPosition),
      ...getStyleValue("marginTop", typeDatepickerMarginTop),
    };
  }, [typeDatepickerPosition, typeDatepickerMarginTop]);

  return (
    <View style={[styles.datepickerLayout, typeDatepickerStyle]}>
      <View style={[styles.datepicker, styles.datepickerLayout]}>
        <Text style={styles.text}>{text}</Text>
        <Image
          style={styles.systemIconscalendar}
          resizeMode="cover"
          source={systemIconsCalendar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datepickerLayout: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
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
  datepicker: {
    backgroundColor: Color.gray00,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default TypeDatepicker;
