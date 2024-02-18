import React, { useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";
import StateDefaultShowPasswordO from "./StateDefaultShowPasswordO";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypePassword = ({
  showContainer,
  showEllipseIcon,
  ellipseIconVisible,
  ellipseIconVisible1,
  ellipseIconVisible2,
  ellipseIconVisible3,
  ellipseIconVisible4,
  ellipseIconVisible5,
  ellipseIconVisible6,
  ellipseIconVisible7,
  ellipseIconVisible8,
  ellipseIconVisible9,
  ellipseIconVisible10,
  showSystemIconsShowHide,
  typePasswordPosition,
  typePasswordMarginTop,
}) => {
  const typePasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typePasswordPosition),
      ...getStyleValue("marginTop", typePasswordMarginTop),
    };
  }, [typePasswordPosition, typePasswordMarginTop]);

  return (
    <View style={[styles.typepassword, typePasswordStyle]}>
      <StateDefaultShowPasswordO
        systemIconsShowHide={require("../assets/1-system-iconsshowhide.png")}
        showContainer
        showEllipseIcon
        ellipseIconVisible
        ellipseIconVisible1
        ellipseIconVisible2
        ellipseIconVisible3
        ellipseIconVisible4
        ellipseIconVisible5
        ellipseIconVisible6
        ellipseIconVisible7
        ellipseIconVisible8
        ellipseIconVisible9
        ellipseIconVisible10
        showSystemIconsShowHide
        stateDefaultShowPasswordOPosition="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  typepassword: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default TypePassword;
