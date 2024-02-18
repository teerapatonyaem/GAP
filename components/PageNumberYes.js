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
const PageNumberYes = ({
  textPage = "Page 1 of 100",
  divider,
  systemIconsZoomInZoomOut,
  systemIconsFullscreen,
  systemIconsZoomInZoomOut1,
  pageNumberYesPosition,
}) => {
  const pageNumberYesStyle = useMemo(() => {
    return {
      ...getStyleValue("position", pageNumberYesPosition),
    };
  }, [pageNumberYesPosition]);

  return (
    <View style={[styles.pageNumberyes, pageNumberYesStyle]}>
      <Text style={styles.text}>{textPage}</Text>
      <Image
        style={[styles.dividerIcon, styles.dividerIconSpaceBlock]}
        resizeMode="cover"
        source={divider}
      />
      <Image
        style={[styles.systemIconszoomInZoomOut, styles.dividerIconSpaceBlock]}
        resizeMode="cover"
        source={systemIconsZoomInZoomOut}
      />
      <Image
        style={[styles.systemIconszoomInZoomOut, styles.dividerIconSpaceBlock]}
        resizeMode="cover"
        source={systemIconsFullscreen}
      />
      <Image
        style={[styles.systemIconszoomInZoomOut, styles.dividerIconSpaceBlock]}
        resizeMode="cover"
        source={systemIconsZoomInZoomOut1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerIconSpaceBlock: {
    marginLeft: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.baseColourBase500,
    textAlign: "left",
  },
  dividerIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  systemIconszoomInZoomOut: {
    width: 24,
    height: 24,
  },
  pageNumberyes: {
    borderRadius: Border.br_980xl,
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(59, 89, 152, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default PageNumberYes;
