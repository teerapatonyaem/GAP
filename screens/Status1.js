import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormSection1 from "../components/FormSection1";
import ProfileForm1 from "../components/ProfileForm1";
import { Color } from "../GlobalStyles";

const Status1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.status}>
      <FormSection1 />
      <ProfileForm1
        imageAltText={require("../assets/menu-icon.png")}
        menuIcon1={require("../assets/menu-icon3.png")}
        showHomeIndicator={false}
        propPosition="absolute"
        propMarginLeft={-206}
        propLeft="50%"
        propMarginTop="unset"
        onLayoutPress={() => navigation.navigate("Expense")}
        onLayoutPress1={() => navigation.navigate("Status1")}
        onLayoutPress2={() => navigation.navigate("Modal1")}
        onLayoutPress3={() => navigation.navigate("RiceInfo")}
        onLayoutPress4={() => navigation.navigate("Proofile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
    width: "100%",
    height: 732,
    overflow: "hidden",
  },
});

export default Status1;
