import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import OnContainerOnImage from "./OnContainerOnImage";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionForm1 = ({
  landManagementName,
  imageDescription,
  landImageUrl,
  imageThumbnailUrls,
  cropName,
  imageThumbnailUrls2,
  landCode,
  propOpacity,
  propOpacity1,
  propOpacity2,
}) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity),
    };
  }, [propOpacity]);

  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity1),
    };
  }, [propOpacity1]);

  const frameView6Style = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity2),
    };
  }, [propOpacity2]);

  return (
    <View style={styles.frameParent}>
      <View style={styles.flatFlexBox}>
        <OnContainerOnImage
          onContainerOnImageOnConta={require("../assets/flaticonbook.png")}
          onContainerOnIconOverflow="hidden"
          onContainerOnIconWidth="100%"
          onContainerOnIconAlignSelf="stretch"
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{landManagementName}</Text>
        </View>
      </View>
      <View
        style={[styles.flatIconbookGroup, styles.flatFlexBox, frameView4Style]}
      >
        <OnContainerOnImage
          onContainerOnImageOnConta={require("../assets/flaticonbook1.png")}
          onContainerOnIconOverflow="unset"
          onContainerOnIconWidth={80}
          onContainerOnIconAlignSelf="unset"
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{landImageUrl}</Text>
        </View>
      </View>
      <View
        style={[styles.flatIconbookGroup, styles.flatFlexBox, frameView5Style]}
      >
        <OnContainerOnImage
          onContainerOnImageOnConta={require("../assets/flaticonbook1.png")}
          onContainerOnIconOverflow="unset"
          onContainerOnIconWidth={80}
          onContainerOnIconAlignSelf="unset"
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{cropName}</Text>
        </View>
      </View>
      <View
        style={[styles.flatIconbookGroup, styles.flatFlexBox, frameView6Style]}
      >
        <OnContainerOnImage
          onContainerOnImageOnConta={require("../assets/flaticonbook1.png")}
          onContainerOnIconOverflow="unset"
          onContainerOnIconWidth={80}
          onContainerOnIconAlignSelf="unset"
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{landCode}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  wrapper: {
    marginTop: 5,
  },
  flatIconbookGroup: {
    marginLeft: 8,
  },
  frameParent: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
  },
});

export default SectionForm1;
