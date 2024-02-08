import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import RiceInformationPDF from "../components/RiceInformationPDF";
import { Color } from "../GlobalStyles";

const Screen6 = () => {
  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <RiceInformationPDF />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 28,
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

export default Screen6;
