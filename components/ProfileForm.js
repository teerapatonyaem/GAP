import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import StyleStandardActiveNo from "./StyleStandardActiveNo";
import StyleSimpleActiveNo from "./StyleSimpleActiveNo";
import ProfileContainer from "./ProfileContainer";
import DarkModeFalse from "./DarkModeFalse";
import { Padding, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileForm1 = ({
  propMarginTop,
  onLayoutPress,
  onLayoutPress1,
  onLayoutPress2,
  onLayoutPress3,
  onLayoutPress4,
}) => {
  const tabBar1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.tabbar, tabBar1Style]}>
      <View style={[styles.tabs, styles.tabsLayout]}>
        <Pressable style={styles.layout} onPress={onLayoutPress}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon4.png")}
            text="รับ-จ่าย"
            styleStandardActiveNoPosition="unset"
            labelColor="#03290e"
          />
        </Pressable>
        <Pressable style={styles.layout} onPress={onLayoutPress1}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon1.png")}
            text="เอกสาร"
            styleStandardActiveNoPosition="unset"
            labelColor="#03290e"
          />
        </Pressable>
        <Pressable style={styles.layout} onPress={onLayoutPress2}>
          <StyleSimpleActiveNo
            systemIconsFourSquares={require("../assets/1-system-iconsadd.png")}
            alertOnTabBar={require("../assets/alert-on-tabbar.png")}
            showAlertDot={false}
            styleSimpleActiveNoPosition="unset"
          />
        </Pressable>
        <Pressable style={styles.layout} onPress={onLayoutPress3}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon3.png")}
            text="รู้ข้าว"
            styleStandardActiveNoPosition="unset"
            labelColor="#03290e"
          />
        </Pressable>
        <Pressable style={styles.layout} onPress={onLayoutPress4}>
          <ProfileContainer profileText="โปรไฟล์" showAlertDot={false} />
        </Pressable>
      </View>
      {showHomeIndicator && (
        <View style={[styles.ioshomeindicator, styles.tabsLayout]}>
          <DarkModeFalse />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsLayout: {
    width: 375,
    alignItems: "center",
  },
  layout: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  tabs: {
    height: 56,
    paddingVertical: 0,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  ioshomeindicator: {
    height: 34,
    display: "none",
  },
  tabbar: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: Color.gray50,
    width: 412,
    paddingVertical: Padding.p_5xs,
    marginTop: 10,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
});

export default ProfileForm1;
