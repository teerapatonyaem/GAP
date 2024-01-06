import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import TypeDatepicker from "./TypeDatepicker";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.input}>
      <View style={styles.label}>
        <Text style={styles.label1}>สถานที่แปลง</Text>
        <Image
          style={styles.iconStatus}
          resizeMode="cover"
          //source={require("../assets/icon-status11.png")}
        />
      </View>
      <TypeDatepicker
        text="สถานที่แปลง"
        //systemIconsCalendar={require("../assets/1-system-iconslocation.png")}
        typeDatepickerPosition="unset"
        typeDatepickerMarginTop={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label1: {
    flex: 1,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
  },
  iconStatus: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default FormContainer;
