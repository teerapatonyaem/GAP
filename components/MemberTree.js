import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal6 from "./Modal6";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const MemberTree = () => {
  const navigation = useNavigation();
  const [frameContainer2Visible, setFrameContainer2Visible] = useState(false);

  const openFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(true);
  }, []);

  const closeFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.systemIconseditLayout}
            onPress={() => navigation.navigate("Home")}
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
            onPress={openFrameContainer2}
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

      <Modal animationType="fade" transparent visible={frameContainer2Visible}>
        <View style={styles.frameContainer2Overlay}>
          <Pressable
            style={styles.frameContainer2Bg}
            onPress={closeFrameContainer2}
          />
          <Modal6 onClose={closeFrameContainer2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.titleT3SemiBold,
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
    width: "100%",
    height: "100%",
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
  frameContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    fontFamily: FontFamily.titleT3SemiBold,
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
});

export default MemberTree;
