import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Member = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.member}>
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.systemIconseditLayout}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textTypo]}>ผังสมาชิก</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.systemIconseditParent}>
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsedit.png")}
            />
            <Text style={styles.textTypo}>แก้ไข</Text>
          </View>
          <Pressable
            style={styles.systemIconsaddUserParent}
            onPress={() => navigation.navigate("Modal5")}
          >
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsadd-user.png")}
            />
            <Text style={styles.textTypo}>เพิ่ม</Text>
          </Pressable>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.foodfarmerParent}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>สมโชค</Text>
            <Text style={styles.text3}>หัวหน้า</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer4.png")}
            />
            <Text style={styles.text3}>นางสวรีต</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.foodfarmerParent}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>สมโชค</Text>
            <Text style={styles.text3}>หัวหน้า</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer4.png")}
            />
            <Text style={styles.text3}>นางสวรีต</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.foodfarmerParent}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>สมโชค</Text>
            <Text style={styles.text3}>หัวหน้า</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer4.png")}
            />
            <Text style={styles.text3}>นางสวรีต</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.foodfarmerParent}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>สมโชค</Text>
            <Text style={styles.text3}>หัวหน้า</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer3.png")}
            />
            <Text style={styles.text3}>นายดง</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
          <View style={styles.foodfarmerGroup}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer4.png")}
            />
            <Text style={styles.text3}>นางสวรีต</Text>
            <Text style={styles.text3}>ตำแหน่ง</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.selectorS6SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.buttonBT3SemiBold_size,
  },
  frameFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconseditLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  systemIconsedit: {
    overflow: "hidden",
  },
  systemIconseditParent: {
    flexDirection: "row",
  },
  systemIconsaddUserParent: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "flex-end",
    padding: Padding.p_5xs,
  },
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text3: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.selectorS6SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.buttonBT3SemiBold_size,
  },
  foodfarmerParent: {
    alignItems: "center",
  },
  foodfarmerGroup: {
    marginLeft: 16,
    alignItems: "center",
  },
  frameContainer: {
    justifyContent: "center",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  member: {
    backgroundColor: Color.gray00,
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Member;
