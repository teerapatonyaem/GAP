import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SectionCard2 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.foodfarmerParent}>
        <Image
          style={styles.foodfarmerIcon}
          resizeMode="cover"
          source={require("../assets/2-foodfarmer3.png")}
        />
        <Text style={styles.text}>สมโชค</Text>
        <Text style={styles.text}>หัวหน้า</Text>
      </View>
      <View style={styles.foodfarmerGroup}>
        <Image
          style={styles.foodfarmerIcon}
          resizeMode="cover"
          source={require("../assets/2-foodfarmer3.png")}
        />
        <Text style={styles.text}>นายดง</Text>
        <Text style={styles.text}>ตำแหน่ง</Text>
      </View>
      <View style={styles.foodfarmerGroup}>
        <Image
          style={styles.foodfarmerIcon}
          resizeMode="cover"
          source={require("../assets/2-foodfarmer3.png")}
        />
        <Text style={styles.text}>นายดง</Text>
        <Text style={styles.text}>ตำแหน่ง</Text>
      </View>
      <View style={styles.foodfarmerGroup}>
        <Image
          style={styles.foodfarmerIcon}
          resizeMode="cover"
          source={require("../assets/2-foodfarmer4.png")}
        />
        <Text style={styles.text}>นางสวรีต</Text>
        <Text style={styles.text}>ตำแหน่ง</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  foodfarmerParent: {
    alignItems: "center",
  },
  foodfarmerGroup: {
    marginLeft: 16,
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
});

export default SectionCard2;
