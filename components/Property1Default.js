import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import CardContainer from "./CardContainer";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  property1DefaultPosition,
  property1DefaultMarginTop,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [property1DefaultPosition, property1DefaultMarginTop]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <CardContainer
        otherItemsSoilType="รายการอื่นๆ"
        itemCode={require("../assets/icon-status.png")}
        transactionButtonText="เลือกทำรายการ"
        dimensionCode={require("../assets/1-system-iconscollapseexpand.png")}
        propAlignSelf="stretch"
        propWidth="unset"
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

const styles = StyleSheet.create({
  property1default: {
    alignSelf: "stretch",
  },
});

export default Property1Default;
