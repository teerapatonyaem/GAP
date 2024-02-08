import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Profile from "../components/Profile";
import ProfileBottomBar from "../components/ProfileBottomBar";
import { Color } from "../GlobalStyles";

const Screen7 = () => {
  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <Profile />
      <ProfileBottomBar />
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

export default Screen7;
