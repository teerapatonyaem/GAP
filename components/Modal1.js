import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Frame2 from "./Property1Frame2";
import { Color } from "../GlobalStyles";

const Modal1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <Property1Frame2
        label="รายละเอียดค่าใช้จ่าย"
        text="รายละเอียดค่าใช้จ่าย"
        property1Frame1000001815Position="unset"
        onButtonPress={() => navigation.navigate("Modal4")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Color.colorDarkslategray_100,
    width: 412,
    height: 712,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Modal1;
