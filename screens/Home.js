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
import FormSection from "../components/FormSection";
import ProfileForm1 from "../components/ProfileForm1";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        <GreetingSection />

        {/* จัด Pressable ให้อยู่ตรงกลางหน้าจอ */}
        <View style={styles.centeredContainer}>
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

      </ScrollView>

      <ProfileForm1
        imageAltText={require("../assets/menu-icon.png")}
        menuIcon1={require("../assets/menu-icon2.png")}
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
  scrollViewContent: {
    flexGrow: 1,
    padding: Padding.p_base,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  pressable: {
    paddingHorizontal: Padding.p_base,
  },
  imageContainer: {
    position: "relative", // ให้สามารถจัดการ position ภายในได้
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  backgroundImage: {
    width: 307,
    height: 307,
    borderRadius: Border.br_base,
  },
  iconContainer: {
    position: "absolute", // ทำให้สามารถซ้อนบนพื้นหลังได้
    top: 230,
    zIndex: 1, // กำหนด zIndex ให้ซ้อนบน
    width: 275,
    height: 91,
    backgroundColor: Color.surfaceColourWhiteSurface,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 48,
    height: 48,
  },
  textWrapper: {
    marginTop: 8,
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    textAlign: "center",
  },
  gap1Icon: {
    borderRadius: Border.br_5xs,
    width: 316,
    height: 210,
    marginVertical: 16,
  },
});

export default Home;