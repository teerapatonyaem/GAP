import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StyleSimpleActiveNo = ({
  systemIconsFourSquares,
  alertOnTabBar,
  showAlertDot = false,
  styleSimpleActiveNoPosition,
}) => {
  const styleSimpleActiveNoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", styleSimpleActiveNoPosition),
    };
  }, [styleSimpleActiveNoPosition]);

  return (
    <View style={[styles.stylesimpleActiveno, styleSimpleActiveNoStyle]}>
      <View style={styles.menuIcon}>
        <Image
          style={styles.systemIconsfourSquares}
          resizeMode="cover"
          source={systemIconsFourSquares}
        />
        {showAlertDot && (
          <Image
            style={styles.alertOnTabbarIcon}
            resizeMode="cover"
            source={alertOnTabBar}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  systemIconsfourSquares: {
    width: 32,
    height: 32,
    overflow: "hidden",
    zIndex: 0,
  },
  alertOnTabbarIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    borderRadius: Border.br_31xl,
    width: 8,
    height: 8,
    display: "none",
    zIndex: 1,
  },
  menuIcon: {
    flexDirection: "row",
  },
  stylesimpleActiveno: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
});

export default StyleSimpleActiveNo;
