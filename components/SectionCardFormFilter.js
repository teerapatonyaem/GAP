import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionForm1 from "./SectionForm1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SectionCardFormFilter = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("RiceInfoDetail")}
    >
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>
          การจัดการดินเเละปุ๋ยในนาข้าว
        </Text>
        <Text style={[styles.text1, styles.textFlexBox]}>อื่นๆ</Text>
      </View>
      <SectionForm1
        landManagementName="การจัดการดิน"
        imageDescription={require("../assets/flaticonbook1.png")}
        landImageUrl="ดินเค็ม"
        imageThumbnailUrls={require("../assets/flaticonbook1.png")}
        cropName="ดินเปี้ยว"
        imageThumbnailUrls2={require("../assets/flaticonbook1.png")}
        landCode="ดินทราย"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  text: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyB4Regular,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default SectionCardFormFilter;
