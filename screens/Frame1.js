import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.systemIconseditLayout}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textTypo]}>ผังสมาชิก</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.systemIconseditParent}>
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsedit1.png")}
            />
            <Text style={styles.textTypo}>แก้ไข</Text>
          </View>
          <View style={styles.systemIconsaddUserParent}>
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsadd-user.png")}
            />
            <Text style={styles.textTypo}>เพิ่ม</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <View style={styles.foodfarmerParent}>
            <Image
              style={styles.foodfarmerIcon}
              resizeMode="cover"
              source={require("../assets/2-foodfarmer1.png")}
            />
            <Text style={styles.text3}>หัวหน้า</Text>
          </View>
          <View style={styles.frameView}>
            <View style={styles.foodfarmerParent}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>เลขา</Text>
            </View>
            <View style={styles.foodfarmerSpaceBlock}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>บัญชี</Text>
            </View>
            <View
              style={[styles.foodfarmerParent1, styles.foodfarmerSpaceBlock]}
            >
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>เลขา</Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.foodfarmerParent2}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.foodfarmerParent2}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.foodfarmerParent2}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
            <View style={styles.foodfarmerParent3}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
              <Text style={styles.text3}>สมาชิก</Text>
            </View>
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
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.titleT4SemiBold_size,
  },
  frameSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  systemIconseditLayout: {
    height: 24,
    width: 24,
  },
  foodfarmerSpaceBlock: {
    marginLeft: 32,
    alignItems: "center",
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
    flexDirection: "row",
  },
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text3: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.titleT4SemiBold_size,
  },
  foodfarmerParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  foodfarmerParent1: {
    justifyContent: "center",
  },
  frameView: {
    marginTop: 31,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  foodfarmerParent2: {
    alignItems: "flex-end",
  },
  foodfarmerParent3: {
    marginLeft: 36,
    alignItems: "flex-end",
  },
  frameContainer: {
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  view: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Frame1;
