import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const L1page = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.groupParentPosition]}>
      <View style={styles.pngtreefarmersWhoAreInsertParent}>
        <Image
          style={styles.pngtreefarmersWhoAreInsert}
          resizeMode="cover"
          source={require("../assets/pngtreefarmers-who-are-inserting-rice-4730029-1.png")}
        />
        <Image
          style={[styles.theSpiralSun, styles.groupParentPosition]}
          resizeMode="cover"
          source={require("../assets/the-spiral-sun.png")}
        />
      </View>
      <View style={styles.goodAgriculturalPracticesParent}>
        <Text style={styles.goodAgriculturalPractices}>
          Good Agricultural Practices
        </Text>
        <Text style={styles.goodAgriculturalPractices1}>{`ยินดีต้อนรับเข้าสู่ 
Good Agricultural Practices
 ขอให้ท่าสนุกกับการทำฟาร์ม `}</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.button1}>Get started</Text>
          <Image
            style={styles.icons}
            resizeMode="cover"
            source={require("../assets/icons.png")}
          />
        </Pressable>
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
  button1: {
    fontSize: FontSize.buttonRegular_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.baseColourWhite,
    textAlign: "left",
  },
  icons: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 16,
    alignItems: "center",
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
});

export default L1page;
