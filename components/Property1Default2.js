import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import CardContainer from "./CardContainer";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default2 = ({
  iconStatus,
  property1DefaultPosition,
  property1DefaultAlignSelf,
  property1DefaultMarginTop,
  inputWidth,
  inputAlignSelf,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("alignSelf", property1DefaultAlignSelf),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [
    property1DefaultPosition,
    property1DefaultAlignSelf,
    property1DefaultMarginTop,
  ]);

  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputWidth),
      ...getStyleValue("alignSelf", inputAlignSelf),
    };
  }, [inputWidth, inputAlignSelf]);

  return (
    <View>
      <CardContainer
        otherItemsSoilType="แหล่งน้ำที่ใช้"
        itemCode={require("../assets/icon-status1.png")}
        transactionButtonText="แหล่งน้ำที่ใช้"
        dimensionCode={require("../assets/1-system-iconscollapseexpand.png")}
        propAlignSelf="unset"
        propWidth={224}
        propMarginTop="unset"
        propAlignSelf1="stretch"
        propPosition="unset"
        propHeight="unset"
        propPosition1="relative"
        propWidth1={24}
        propHeight1={24}
        propOverflow="hidden"
        propMarginLeft={8}
        propRight="unset"
        propBottom="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Property1Default2;
