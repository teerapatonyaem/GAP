import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const RiceInformation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, styles.searchSpaceBlock]}>
      <View
        style={[styles.basilIconsoutlineoutlinegeParent, styles.parentFlexBox]}
      >
        <Pressable
          style={styles.systemIconssearchLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textTypo1]}>
          องค์ความรู้เรื่องข้าว
        </Text>
      </View>
      <View style={[styles.input, styles.inputSpaceBlock]}>
        <View style={styles.input1}>
          <View style={[styles.search, styles.searchFlexBox]}>
            <Image
              style={[styles.systemIconssearch, styles.systemIconssearchLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconssearch.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>ค้นหา</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.inputSpaceBlock}
        onPress={() => navigation.navigate("Screen6")}
      >
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text2, styles.textTypo1]}>ข้าวเจ้า</Text>
          <Text style={[styles.text3, styles.textTypo]}>อื่นๆ</Text>
        </View>
        <View style={[styles.frameContainer, styles.searchFlexBox]}>
          <View style={styles.flatIconbookParent}>
            <Image
              style={styles.flatIconbook}
              resizeMode="cover"
              source={require("../assets/flaticonbook.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>กข18</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ปทุมธานี 60</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>พัทลุง 60</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ดอกมะลิ</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={styles.inputSpaceBlock}
        onPress={() => navigation.navigate("Screen6")}
      >
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text2, styles.textTypo1]}>ข้าวเหนียว</Text>
          <Text style={[styles.text3, styles.textTypo]}>อื่นๆ</Text>
        </View>
        <View style={[styles.frameContainer, styles.searchFlexBox]}>
          <View style={styles.flatIconbookParent}>
            <Image
              style={styles.flatIconbook}
              resizeMode="cover"
              source={require("../assets/flaticonbook.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>อุบล 1</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ดำหมอ 37</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>สันปาตอง</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ดำช่อไม้</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={styles.inputSpaceBlock}
        onPress={() => navigation.navigate("Screen6")}
      >
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text2, styles.textTypo1]}>ข้าวน้ำลึก</Text>
          <Text style={[styles.text3, styles.textTypo]}>อื่นๆ</Text>
        </View>
        <View style={[styles.frameContainer, styles.searchFlexBox]}>
          <View style={styles.flatIconbookParent}>
            <Image
              style={styles.flatIconbook}
              resizeMode="cover"
              source={require("../assets/flaticonbook.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ตะเภาแก้ว 161</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>นางฉลอง</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>เล็ปมือนาง</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>บ้านนา432</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={styles.inputSpaceBlock}
        onPress={() => navigation.navigate("Screen6")}
      >
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text2, styles.textTypo1]}>ข้าวขึ้นน้ำ</Text>
          <Text style={[styles.text3, styles.textTypo]}>อื่นๆ</Text>
        </View>
        <View style={[styles.frameContainer, styles.searchFlexBox]}>
          <View style={styles.flatIconbookParent}>
            <Image
              style={styles.flatIconbook}
              resizeMode="cover"
              source={require("../assets/flaticonbook.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>เหนียวอุบล 1</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ดำหมอ 37</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>สันปาตอง</Text>
            </View>
          </View>
          <View style={[styles.flatIconbookGroup, styles.text1SpaceBlock]}>
            <Image
              style={styles.flatIconbook1}
              resizeMode="cover"
              source={require("../assets/flaticonbook1.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text3, styles.textTypo]}>ดำช่อไม้</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo1: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
  },
  inputSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  searchFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconssearchLayout: {
    height: 24,
    width: 24,
  },
  text1SpaceBlock: {
    marginLeft: 8,
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.bodyB5Regular,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.buttonBT3SemiBold_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    alignItems: "center",
  },
  systemIconssearch: {
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.selectorS4Regular_size,
    lineHeight: 24,
    color: Color.disableDefaultOnDisableDefault,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
  },
  search: {
    backgroundColor: Color.baseColourWhite,
    borderStyle: "solid",
    borderColor: Color.disableDefaultDisableDefault,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  input1: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  input: {
    borderRadius: Border.br_5xs,
  },
  text2: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  text3: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  flatIconbook: {
    maxWidth: "100%",
    height: 80,
    overflow: "hidden",
    width: "100%",
    alignSelf: "stretch",
  },
  wrapper: {
    marginTop: 5,
  },
  flatIconbookParent: {
    flex: 1,
    alignItems: "center",
  },
  flatIconbook1: {
    width: 80,
    height: 80,
  },
  flatIconbookGroup: {
    alignItems: "center",
  },
  frameContainer: {
    justifyContent: "center",
    marginTop: 6,
    overflow: "hidden",
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
  },
});

export default RiceInformation;
