import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OnContainerOnImage = ({
  onContainerOnImageOnConta,
  onContainerOnIconOverflow,
  onContainerOnIconWidth,
  onContainerOnIconAlignSelf,
}) => {
  const onContainerOnIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", onContainerOnIconOverflow),
      ...getStyleValue("width", onContainerOnIconWidth),
      ...getStyleValue("alignSelf", onContainerOnIconAlignSelf),
    };
  }, [
    onContainerOnIconOverflow,
    onContainerOnIconWidth,
    onContainerOnIconAlignSelf,
  ]);

  return (
    <Image
      style={[styles.onContaineronIcon, onContainerOnIconStyle]}
      resizeMode="cover"
      source={onContainerOnImageOnConta}
    />
  );
};

const styles = StyleSheet.create({
  onContaineronIcon: {
    width: 80,
    height: 80,
  },
});

export default OnContainerOnImage;
