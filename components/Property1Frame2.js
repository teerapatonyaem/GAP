import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import StatusActiveLargeFalse from "./StatusActiveLargeFalse";
import LabelAboveHintNone from "./LabelAboveHintNone";
import SmallSizeTrueStyleOutline from "./SmallSizeTrueStyleOutline";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Frame2 = ({
  label,
  text,
  property1Frame1000001815Position,
  onButtonPress,
}) => {
  const property1Frame1000001815Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Frame1000001815Position),
    };
  }, [property1Frame1000001815Position]);

  return (
    <View
      style={[
        styles.property1frame1000001815,
        styles.parentSpaceBlock1,
        property1Frame1000001815Style,
      ]}
    >
      <View style={styles.tabsParent}>
        <StatusActiveLargeFalse
          active="ทั่วไป"
          statusActiveLargeFalsePosition="unset"
          statusActiveLargeFalseFlex={1}
          statusActiveLargeFalseBackgroundColor="#fff"
          statusActiveLargeFalseMarginLeft="unset"
          activeColor="#7a5af8"
        />
        <StatusActiveLargeFalse
          active="ปุ๋ย"
          statusActiveLargeFalsePosition="unset"
          statusActiveLargeFalseFlex={1}
          statusActiveLargeFalseBackgroundColor="unset"
          statusActiveLargeFalseMarginLeft={8}
          activeColor="#282828"
        />
        <StatusActiveLargeFalse
          active="สารเคมี"
          statusActiveLargeFalsePosition="unset"
          statusActiveLargeFalseFlex={1}
          statusActiveLargeFalseBackgroundColor="unset"
          statusActiveLargeFalseMarginLeft={8}
          activeColor="#282828"
        />
        <StatusActiveLargeFalse
          active="ค่าใช้จ่าย"
          statusActiveLargeFalsePosition="unset"
          statusActiveLargeFalseFlex={1}
          statusActiveLargeFalseBackgroundColor="unset"
          statusActiveLargeFalseMarginLeft={8}
          activeColor="#282828"
        />
      </View>
      <View style={[styles.parent, styles.parentSpaceBlock]}>
        <Text style={styles.text}>การจัดการทั่วไปภายในแปลง</Text>
        <LabelAboveHintNone
          label="งานที่ปฏิบัติ"
          iconStatus={require("../assets/icon-status.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="งานที่ปฏิบัติ"
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={8}
        />
        <LabelAboveHintNone
          label="ปริมาณ"
          iconStatus={require("../assets/icon-status.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="ปริมาณ"
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={8}
        />
        <LabelAboveHintNone
          label="ค่าใช้จ่าย"
          iconStatus={require("../assets/icon-status.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="ค่าใช้จ่าย"
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={8}
        />
        <LabelAboveHintNone
          label="รายละเอียด"
          iconStatus={require("../assets/icon-status.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="รายละเอียด"
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={8}
        />
        <LabelAboveHintNone
          label="เพิ่มเติม"
          iconStatus={require("../assets/icon-status.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="เพิ่มเติม"
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={8}
        />
      </View>
      <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
        <SmallSizeTrueStyleOutline
          button="ยกเลิก"
          showText
          smallSizeTrueStyleOutlinePosition="unset"
          smallSizeTrueStyleOutlineBorderRadius={32}
          smallSizeTrueStyleOutlineBorderStyle="solid"
          smallSizeTrueStyleOutlineBorderColor="#093311"
          smallSizeTrueStyleOutlineBorderWidth={1.5}
          smallSizeTrueStyleOutlinePaddingHorizontal="unset"
          smallSizeTrueStyleOutlineAlignSelf="unset"
          smallSizeTrueStyleOutlineBackgroundColor="unset"
          smallSizeTrueStyleOutlineMarginTop="unset"
          smallSizeTrueStyleOutlineMarginLeft="unset"
          smallSizeTrueStyleOutlineBottom="unset"
          smallSizeTrueStyleOutlineLeft="unset"
          smallSizeTrueStyleOutlineWidth={182}
          buttonFontSize={17}
          buttonFontFamily="Poppins-Medium"
          buttonColor="#126622"
        />
        <SmallSizeTrueStyleOutline
          button="บันทึก"
          showText
          smallSizeTrueStyleOutlinePosition="unset"
          smallSizeTrueStyleOutlineBorderRadius={32}
          smallSizeTrueStyleOutlineBorderStyle="unset"
          smallSizeTrueStyleOutlineBorderColor="unset"
          smallSizeTrueStyleOutlinePaddingHorizontal="unset"
          smallSizeTrueStyleOutlineAlignSelf="unset"
          smallSizeTrueStyleOutlineBackgroundColor="#03290e"
          smallSizeTrueStyleOutlineMarginTop="unset"
          smallSizeTrueStyleOutlineMarginLeft={16}
          smallSizeTrueStyleOutlineBottom="unset"
          smallSizeTrueStyleOutlineLeft="unset"
          smallSizeTrueStyleOutlineWidth={182}
          buttonFontSize={17}
          buttonFontFamily="Poppins-Medium"
          buttonColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock1: {
    padding: Padding.p_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  tabsParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    alignSelf: "stretch",
  },
  parent: {
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 380,
    padding: Padding.p_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    marginTop: 8,
  },
  buttonParent: {
    width: 366,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  property1frame1000001815: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
});

export default Property1Frame2;
