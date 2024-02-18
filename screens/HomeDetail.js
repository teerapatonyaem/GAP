import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GreetingSection from "../components/GreetingSection";
import GreenCardForm from "../components/GreenCardForm";
import FormSection from "../components/FormSection";
import ProfileForm1 from "../components/ProfileForm1";
import { Border, Color } from "../GlobalStyles";

const HomeDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homedetail}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <GreetingSection />
          <GreenCardForm />
        </View>
        <FormSection
          onFramePressablePress={() => navigation.navigate("PlotSurvey")}
          onFramePressablePress1={() => navigation.navigate("Member")}
          onFramePressablePress2={() => navigation.navigate("RiceInfo")}
          onFramePressablePress3={() => navigation.navigate("GAPCertify")}
        />
        <ImageBackground
          style={styles.gap1Icon}
          resizeMode="cover"
          source={require("../assets/gap1.png")}
        />
      </View>
      <ProfileForm1
        imageAltText={require("../assets/menu-icon.png")}
        menuIcon1={require("../assets/menu-icon2.png")}
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
  frameFlexBox: {
    alignItems: "center",
    width: 412,
  },
  frameGroup: {
    height: 423,
  },
  gap1Icon: {
    borderRadius: Border.br_5xs,
    width: 316,
    height: 210,
    marginTop: 8,
  },
  frameParent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 798,
    justifyContent: "center",
    overflow: "hidden",
  },
  homedetail: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 878,
    overflow: "hidden",
  },
});

export default HomeDetail;
