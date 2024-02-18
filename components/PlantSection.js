import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import LabelAboveHintNone from "./LabelAboveHintNone";
import Property1Frame from "./Property1Frame";
import CardSwapComponent from "./CardSwapComponent";
import { Padding, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PlantSection = ({
  plantTypeOrDisease,
  otherPlantTypeOrDisease,
  inputMarginTop,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", inputMarginTop),
    };
  }, [inputMarginTop]);

  return (
    <View style={[styles.frameParent, styles.parentFlexBox, frameViewStyle]}>
      <View style={[styles.inputParent, styles.parentFlexBox]}>
        <LabelAboveHintNone
          label="พืชชนิดอื่น"
          iconStatus={require("../assets/icon-status.png")}
          systemIconsHome={require("../assets/1-system-iconshome.png")}
          text="พืชชนิดอื่น"
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneFlex={1}
          labelAboveHintNoneMarginTop="unset"
        />
        <Property1Frame
          property1Frame1000001643Position="unset"
          property1Frame1000001643MarginLeft={8}
          textTextAlign="right"
        />
      </View>
      <CardSwapComponent
        swapComponent="เพิ่มข้อมูล"
        cardSwapComponentPosition="unset"
        cardSwapComponentBackgroundColor="unset"
        cardSwapComponentPaddingHorizontal="unset"
        cardSwapComponentPaddingVertical="unset"
        cardSwapComponentBorderBottomRightRadius={8}
        cardSwapComponentBorderBottomLeftRadius={8}
        swapItemBackgroundColor="#d5ffdd"
        swapItemWidth="unset"
        swapItemAlignSelf="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputParent: {
    height: 80,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  frameParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
});

export default PlantSection;
