import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Fieldform from "../components/Fieldform";
import { Color } from "../GlobalStyles";

const AndroidLarge2 = () => {
  return (
    <ScrollView
      style={styles.androidLarge2}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.androidLarge2Content}
    >
      <Fieldform />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  androidLarge2Content: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 31,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  androidLarge2: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default AndroidLarge2;
