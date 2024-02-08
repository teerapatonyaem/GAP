import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import FieldAnalysis from "../components/FieldAnalysis";
import { Color } from "../GlobalStyles";

const Screen1 = () => {
  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <FieldAnalysis />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default Screen1;
