import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
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
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          <GreetingSection />
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("Modal2")}
          >
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
              />
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/iconixtolinearaddsquare.png")}
                />
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>สร้างแปลง</Text>
                </View>
              </View>
            </View>
          </Pressable>
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
      </ScrollView>
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
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  pressable: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 307,
    height: 307,
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  iconContainer: {
    top: 230, 
    //left: 0, 
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
    justifyContent: "center",
    alignItems: "center", 
  },
  icon: {
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
  textWrapper: {
    marginTop: 8,
  },
  gap1Icon: {
    borderRadius: Border.br_5xs,
    width: 316,
    height: 210,
    marginTop: 8,
  },
});

export default Home;
