import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GreetingSection from "../components/GreetingSection";
import Modal2 from "../components/Modal2";
import FormSection from "../components/FormSection";
import ProfileForm1 from "../components/ProfileForm1";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <GreetingSection />
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("Modal2")}
          >
            <View
              style={[
                styles.grassLandscapeFieldVectorPParent,
                styles.parentShadowBox,
              ]}
            >
              <Image
                style={styles.grassLandscapeFieldVectorP}
                resizeMode="cover"
                source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
              />
              <View
                style={[
                  styles.iconixtolinearaddSquareParent,
                  styles.parentShadowBox,
                ]}
              >
                <Image
                  style={styles.iconixtolinearaddSquare}
                  resizeMode="cover"
                  source={require("../assets/iconixtolinearaddsquare.png")}
                />
                <View style={[styles.wrapper, styles.textFlexBox]}>
                  <Text style={[styles.text, styles.textFlexBox]}>
                    สร้างแปลง
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
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
  frameLayout: {
    width: 412,
    alignItems: "center",
  },
  parentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  grassLandscapeFieldVectorP: {
    width: 307,
    height: 307,
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  iconixtolinearaddSquare: {
    width: 48,
    height: 48,
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    letterSpacing: -0.2,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    marginTop: 8,
  },
  iconixtolinearaddSquareParent: {
    top: 248,
    left: 17,
    backgroundColor: Color.surfaceColourWhiteSurface,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 275,
    height: 91,
    padding: Padding.p_5xs,
    zIndex: 1,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  grassLandscapeFieldVectorPParent: {
    shadowColor: "rgba(152, 152, 152, 0.5)",
    shadowRadius: 30,
    elevation: 30,
    flexDirection: "row",
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  frameGroup: {
    height: 423,
    alignItems: "center",
  },
  gap1Icon: {
    borderRadius: Border.br_5xs,
    width: 316,
    height: 210,
    marginTop: 8,
  },
  frameParent: {
    top: 0,
    left: 0,
    height: 798,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 878,
    overflow: "hidden",
    flex: 1,
  },
});

export default Home;
