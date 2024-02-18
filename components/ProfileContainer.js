import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ProfileContainer = ({
  profileText = "โปรไฟล์",
  showAlertDot = false,
}) => {
  return (
    <View style={styles.tabbarTab}>
      <View style={styles.menuIcon}>
        <Image
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/farmer.png")}
        />
        {showAlertDot && (
          <Image
            style={styles.alertOnTabbarIcon}
            resizeMode="cover"
            source={require("../assets/alert-on-tabbar1.png")}
          />
        )}
      </View>
      <Text style={styles.label}>{profileText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  farmerIcon: {
    width: 28,
    height: 28,
    zIndex: 0,
  },
  alertOnTabbarIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    borderRadius: Border.br_31xl,
    width: 8,
    height: 8,
    display: "none",
    zIndex: 1,
  },
  menuIcon: {
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 14,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.walledGarden1000,
    textAlign: "center",
    marginTop: 4,
  },
  tabbarTab: {
    alignItems: "center",
  },
});

export default ProfileContainer;
