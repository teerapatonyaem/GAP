import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StyleStandardActiveNo from "./StyleStandardActiveNo";
import StyleSimpleActiveNo from "./StyleSimpleActiveNo";
import DarkModeFalse from "./DarkModeFalse";
import { Padding, Color } from "../GlobalStyles";

const ProfileForm = ({ showHomeIndicator = false }) => {
  return (
    <View style={[styles.tabbar, styles.tabsSpaceBlock]}>
      <View style={[styles.tabs, styles.tabsLayout]}>
        <View style={styles.layout}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon71.png")}
            text="รับ-จ่าย"
            styleStandardActiveNoPosition="unset"
          />
        </View>
        <View style={styles.layout}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon81.png")}
            text="สถานนะ"
            styleStandardActiveNoPosition="unset"
          />
        </View>
        <View style={styles.layout}>
          <StyleSimpleActiveNo
            systemIconsFourSquares={require("../assets/1-system-iconsadd.png")}
            alertOnTabBar={require("../assets/alert-on-tabbar11.png")}
            showAlertDot={false}
            styleSimpleActiveNoPosition="unset"
          />
        </View>
        <View style={styles.layout}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon91.png")}
            text="รู้ข้าว"
            styleStandardActiveNoPosition="unset"
          />
        </View>
        <View style={styles.layout}>
          <StyleStandardActiveNo
            menuIcon={require("../assets/menu-icon101.png")}
            text="โปรไฟล์"
            styleStandardActiveNoPosition="unset"
          />
        </View>
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
  tabsSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
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
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  ioshomeindicator: {
    height: 34,
    display: "none",
  },
  tabbar: {
    position: "absolute",
    marginLeft: -180,
    bottom: 0,
    left: "50%",
    backgroundColor: Color.gray00,
    width: 360,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
  },
});

export default ProfileForm;
