import * as React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import Greetingbutton from "../components/Greetingbutton";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const GreetingScreen = () => {
  return (
    <View style={styles.greetingscreen}>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.pngtreefarmersWhoAreInsertParent}>
          <ImageBackground
            style={styles.pngtreefarmersWhoAreInsert}
            resizeMode="cover"
            source={require("../assets/pngtreefarmerswhoareinsertingrice47300291.png")}
          />
          <ImageBackground
            style={[styles.theSpiralSun, styles.groupParentPosition]}
            resizeMode="cover"
            source={require("../assets/thespiralsun.png")}
          />
        </View>
        <View style={styles.goodAgriculturalPracticesParent}>
          <Text style={styles.goodAgriculturalPractices}>
            Good Agricultural Practices
          </Text>
          <Text style={styles.goodAgriculturalPractices1}>{`ยินดีต้อนรับเข้าสู่ 
Good Agricultural Practices
 ขอให้ท่าสนุกกับการทำฟาร์ม `}</Text>
          <Greetingbutton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    top: 0,
    position: "absolute",
  },
  pngtreefarmersWhoAreInsert: {
    marginTop: -172.1,
    marginLeft: -206,
    top: "50%",
    left: "50%",
    height: 415,
    width: 412,
    position: "absolute",
  },
  theSpiralSun: {
    left: 242,
    width: 127,
    height: 126,
  },
  pngtreefarmersWhoAreInsertParent: {
    height: 486,
    width: 412,
  },
  goodAgriculturalPractices: {
    fontSize: FontSize.bodyXXL400_size,
    lineHeight: 32,
    fontFamily: FontFamily.bodyXXL400,
    textAlign: "left",
    color: Color.gray900,
  },
  goodAgriculturalPractices1: {
    alignSelf: "stretch",
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.bodySmalls300,
    textAlign: "center",
    marginTop: 16,
    color: Color.gray900,
  },
  goodAgriculturalPracticesParent: {
    alignItems: "center",
  },
  groupParent: {
    left: 0,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xl,
    alignItems: "center",
  },
  greetingscreen: {
    backgroundColor: Color.gray00,
    flex: 1,
    width: "100%",
    height: 712,
    overflow: "hidden",
  },
});

export default GreetingScreen;
