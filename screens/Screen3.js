import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import GAPGuarantee from "../components/GAPGuarantee";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Screen3 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.inner}>
        <GAPGuarantee />
      </View>
      <View style={styles.buttonParent}>
        <View style={[styles.button, styles.buttonLayout]}>
          <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
        </View>
        <Pressable
          style={[styles.button2, styles.buttonLayout]}
          onPress={() => navigation.navigate("Frame")}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>ยื่น GAP</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    width: 182,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTypo: {
    textAlign: "left",
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.buttonRegular_size,
  },
  inner: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xl,
  },
  button1: {
    color: Color.brightLightGreen900,
  },
  button: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1.5,
  },
  button3: {
    color: Color.baseColourWhite,
  },
  button2: {
    backgroundColor: Color.walledGarden1000,
    marginLeft: 16,
  },
  buttonParent: {
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  scrollview: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Screen3;
