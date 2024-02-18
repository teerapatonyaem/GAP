import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IconixtolinearcheckboxCheck = ({
  iconixtolinearcheckboxChe,
  iconixtolinearcheckboxCheWidth,
  iconixtolinearcheckboxCheHeight,
}) => {
  const iconixtolinearcheckboxCheckStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconixtolinearcheckboxCheWidth),
      ...getStyleValue("height", iconixtolinearcheckboxCheHeight),
    };
  }, [iconixtolinearcheckboxCheWidth, iconixtolinearcheckboxCheHeight]);

  return (
    <Image
      style={[
        styles.iconixtolinearcheckboxCheck,
        iconixtolinearcheckboxCheckStyle,
      ]}
      resizeMode="cover"
      source={iconixtolinearcheckboxChe}
    />
  );
};

const styles = StyleSheet.create({
  iconixtolinearcheckboxCheck: {
    width: 24,
    height: 24,
  },
});

export default IconixtolinearcheckboxCheck;
