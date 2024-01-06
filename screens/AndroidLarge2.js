import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import Fieldform from "../components/Fieldform";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <ScrollView
        style={styles.frameParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Fieldform />
        <View style={styles.buttonParent}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Pressable onPress={() => navigation.navigate("AndroidLarge1")}>
              <Text style={[styles.text, styles.textTypo]}>ยกเลิก</Text>
            </Pressable>
          </View>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Text style={[styles.button3, styles.textTypo]}>สร้างแปลง</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    height: 44,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.selectorS6SemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.buttonSmall_size,
  },
  text: {
    color: Color.primary600,
  },
  button: {
    backgroundColor: Color.primary100,
  },
  button3: {
    color: Color.surfaceColourWhiteSurface,
  },
  button2: {
    backgroundColor: Color.primary500,
    marginLeft: 8,
  },
  buttonParent: {
    alignSelf: "stretch",
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent: {
    width: 360,
    maxWidth: 360,
    flex: 1,
  },
  androidLarge2: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: 31,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
});

export default AndroidLarge2;
