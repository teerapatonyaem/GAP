import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import SelectionControl from "./SelectionControl";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Frame = ({
  property1Frame1000001643Position,
  property1Frame1000001643MarginLeft,
  textTextAlign,
}) => {
  const property1Frame1000001643Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Frame1000001643Position),
      ...getStyleValue("marginLeft", property1Frame1000001643MarginLeft),
    };
  }, [property1Frame1000001643Position, property1Frame1000001643MarginLeft]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("textAlign", textTextAlign),
    };
  }, [textTextAlign]);

  return (
    <View
      style={[styles.property1frame1000001643, property1Frame1000001643Style]}
    >
      <Text style={[styles.text, styles.textTypo, text2Style]}>ปริมาณ</Text>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo]}>น้อย</Text>
          <SelectionControl
            label="Checkbox"
            showLabel={false}
            selectionControlPosition="unset"
            checkboxStateTop="0%"
            checkboxStateLeft="0%"
            checkboxStateWidth="100%"
            checkboxStateHeight="100%"
            checkboxStateRight="0%"
            checkboxStateBottom="0%"
            rectangleBorderRadius={100}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>กลาง</Text>
          <SelectionControl
            label="Checkbox"
            showLabel={false}
            selectionControlPosition="unset"
            checkboxStateTop="0%"
            checkboxStateLeft="0%"
            checkboxStateWidth="100%"
            checkboxStateHeight="100%"
            checkboxStateRight="0%"
            checkboxStateBottom="0%"
            rectangleBorderRadius={100}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.text1, styles.textTypo]}>มาก</Text>
          <SelectionControl
            label="Checkbox"
            showLabel={false}
            selectionControlPosition="unset"
            checkboxStateTop="0%"
            checkboxStateLeft="0%"
            checkboxStateWidth="100%"
            checkboxStateHeight="100%"
            checkboxStateRight="0%"
            checkboxStateBottom="0%"
            rectangleBorderRadius={100}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
  },
  text: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
  },
  parent: {
    alignItems: "center",
  },
  group: {
    marginLeft: 32,
    alignItems: "center",
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  property1frame1000001643: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Property1Frame;
