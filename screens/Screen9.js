import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import Fram1 from "../components/Fram1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Screen9 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <Fram1 />
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => navigation.navigate("Screen8")}
      >
        <View style={styles.button}>
          <Text style={styles.button1}>เพิ่มการสำรวจแปลง</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    fontSize: FontSize.buttonBT5SemiBold_size,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.buttonBT5SemiBold,
    color: Color.surfaceColourWhiteSurface,
    textAlign: "left",
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary500,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    flex: 1,
  },
  buttonWrapper: {
    width: 380,
    marginTop: 14,
    flexDirection: "row",
  },
  scrollview: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default Screen9;
