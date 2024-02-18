import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultShowPasswordO = ({
  systemIconsShowHide,
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
  stateDefaultShowPasswordOPosition,
}) => {
  const stateDefaultShowPasswordOStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultShowPasswordOPosition),
    };
  }, [stateDefaultShowPasswordOPosition]);

  return (
    <View
      style={[styles.statedefaultShowPasswordo, stateDefaultShowPasswordOStyle]}
    >
      {showContainer && (
        <View style={styles.container}>
          {showEllipseIcon && (
            <Image
              style={styles.containerLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible1 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible2 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible3 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible4 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible5 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible6 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible7 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible8 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible9 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
          {ellipseIconVisible10 && (
            <Image
              style={[styles.containerItem, styles.containerLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          )}
        </View>
      )}
      {showSystemIconsShowHide && (
        <Image
          style={styles.systemIconsshowhide}
          resizeMode="cover"
          source={systemIconsShowHide}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    height: 6,
    width: 6,
  },
  containerItem: {
    marginLeft: 4,
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
  },
  systemIconsshowhide: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 8,
  },
  statedefaultShowPasswordo: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default StateDefaultShowPasswordO;
