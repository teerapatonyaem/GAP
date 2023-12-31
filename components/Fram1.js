import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Fram1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.basilIconsoutlineoutlinegeParent}>
        <Pressable
          style={styles.basilIconsoutlineoutlinege}
          onPress={() => navigation.navigate("Screen11")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textTypo2]}>สำรวจแปลง</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
        <View style={styles.frameContainer}>
          <View style={styles.parent}>
            <Text style={styles.text1}>ครั้งที่ 1</Text>
            <View style={styles.systemIconsdeleteParent}>
              <Image
                style={styles.systemLayout}
                resizeMode="cover"
                source={require("../assets/1-system-iconsdelete.png")}
              />
              <Image
                style={[styles.systemIconsedit, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconsedit.png")}
              />
            </View>
          </View>
          <Text style={styles.text2}>
            วัน อาทิตย์ ที่ 2 ธันวาคม พ.ศ.2566 เวลา 13.00 น.
          </Text>
        </View>
        <View style={styles.frameSpaceBlock}>
          <View style={styles.frameView}>
            <View style={styles.group}>
              <Text style={[styles.text3, styles.textTypo2]}>พืชชนิดอื่น</Text>
              <View style={styles.container}>
                <Text style={styles.textTypo1}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.textTypo1}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
              </View>
            </View>
            <View style={styles.parent2}>
              <Text style={[styles.text3, styles.textTypo2]}>ปริมาณ</Text>
              <View style={styles.container}>
                <Text style={styles.textTypo}>มาก</Text>
                <Text style={[styles.text12, styles.textTypo]}>น้อย</Text>
                <Text style={[styles.text12, styles.textTypo]}>กลาง</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.textTypo}>มาก</Text>
                <Text style={[styles.text12, styles.textTypo]}>น้อย</Text>
                <Text style={[styles.text12, styles.textTypo]}>กลาง</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
        <View style={styles.frameContainer}>
          <View style={styles.parent}>
            <Text style={styles.text1}>ครั้งที่ 2</Text>
            <View style={styles.systemIconsdeleteParent}>
              <Image
                style={styles.systemLayout}
                resizeMode="cover"
                source={require("../assets/1-system-iconsdelete.png")}
              />
              <Image
                style={[styles.systemIconsedit, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconsedit.png")}
              />
            </View>
          </View>
          <Text style={styles.text2}>
            วัน อาทิตย์ ที่ 2 ธันวาคม พ.ศ.2566 เวลา 13.00 น.
          </Text>
        </View>
        <View style={styles.frameSpaceBlock}>
          <View style={styles.frameView}>
            <View style={styles.group}>
              <Text style={[styles.text3, styles.textTypo2]}>พืชชนิดอื่น</Text>
              <View style={styles.container}>
                <Text style={styles.textTypo1}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.textTypo1}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
                <Text style={[styles.text5, styles.textTypo1]}>หญ้า</Text>
              </View>
            </View>
            <View style={styles.parent2}>
              <Text style={[styles.text3, styles.textTypo2]}>ปริมาณ</Text>
              <View style={styles.container}>
                <Text style={styles.textTypo}>มาก</Text>
                <Text style={[styles.text12, styles.textTypo]}>น้อย</Text>
                <Text style={[styles.text12, styles.textTypo]}>กลาง</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.textTypo}>มาก</Text>
                <Text style={[styles.text12, styles.textTypo]}>น้อย</Text>
                <Text style={[styles.text12, styles.textTypo]}>กลาง</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.titleT4SemiBold_size,
  },
  frameSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  systemLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  textTypo1: {
    lineHeight: 22,
    fontSize: FontSize.buttonBT5SemiBold_size,
    fontFamily: FontFamily.labelLB4Regular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "right",
    lineHeight: 22,
    fontSize: FontSize.buttonBT5SemiBold_size,
    fontFamily: FontFamily.labelLB4Regular,
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  basilIconsoutlineoutlinege: {
    height: 24,
    width: 24,
  },
  text: {
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.titleT3SemiBold_size,
    lineHeight: 30,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  systemIconsedit: {
    marginLeft: 8,
  },
  systemIconsdeleteParent: {
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  parent: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    fontSize: FontSize.bodyB6Regular_size,
    lineHeight: 18,
    color: Color.descriptiveTextColourTextLight500,
    fontFamily: FontFamily.labelLB4Regular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameContainer: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  text3: {
    alignSelf: "stretch",
  },
  text5: {
    marginTop: 1,
  },
  container: {
    alignSelf: "stretch",
  },
  group: {
    flex: 1,
  },
  text12: {
    marginTop: 1,
  },
  parent2: {
    marginLeft: 12,
    flex: 1,
  },
  frameView: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameGroup: {
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(181, 201, 235, 0.15)",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    marginTop: 8,
    justifyContent: "center",
  },
  frameParent1: {
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(181, 201, 235, 0.15)",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    marginTop: 8,
  },
  frameParent: {
    width: 412,
    height: 594,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
});

export default Fram1;
