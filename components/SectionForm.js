import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionForm1 from "./SectionForm1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("RiceInfoDetail")}
    >
      <View style={styles.wrapper}>
        <Text style={styles.text}>เอกสารอื่นๆ</Text>
      </View>
      <SectionForm1
        landManagementName="GAP"
        imageDescription={require("../assets/flaticonbook2.png")}
        landImageUrl="ดินเค็ม"
        imageThumbnailUrls={require("../assets/flaticonbook2.png")}
        cropName="ดินเปี้ยว"
        imageThumbnailUrls2={require("../assets/flaticonbook2.png")}
        landCode="ดินทราย"
        propOpacity={0}
        propOpacity1={0}
        propOpacity2={0}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  wrapper: {
    flexDirection: "row",
  },
  frameParent: {
    alignSelf: "stretch",
    marginTop: 8,
  },
});

export default SectionForm;
