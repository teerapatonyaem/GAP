import React, { useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation,useRoute  } from "@react-navigation/native";
import FormSection from "../components/FormSection";
import ProfileForm1 from "../components/ProfileForm1";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import UserContext from "../components/UserContext";


const Home = () => {
  const navigation = useNavigation();
  const route = useRoute(); 
  //const username = route.params?.username;
  const { username, setUsername } = useContext(UserContext); 

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVertical Scroll Indicator={true}
        showsHorizontalScrollIndicator={false}
      >
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <View style={styles.greetingInner}>
            <View style={styles.avatarSection}>
              <Image
                style={styles.avatar}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={styles.greetingText}>
                <Text style={[styles.greeting, styles.greetingFont]}>
                  สวัสดี
                </Text>
                <Text style={[styles.greeting2, styles.greetingFont]}>
                  {username} 
                </Text>
              </View>
            </View>
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/iconixtolinearnotificationunread.png")}
            />
          </View>
        </View>

        {/* Pressable Section */}
        <View style={styles.centeredContainer}>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("Modal2")}
          >
            <View style={styles.imageContainer}>
              <Image
                style={styles.backgroundImage}
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
                  <Text style={styles.createPlotText}>
                    สร้างแปลง
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>

        {/* Form Section */}
        <FormSection
          onFramePressablePress={() => navigation.navigate("PlotSurvey")}
          onFramePressablePress1={() => navigation.navigate("Member")}
          onFramePressablePress2={() => navigation.navigate("RiceInfo")}
          onFramePressablePress3={() => navigation.navigate("GAPCertify")}
        />

        {/* Image Background Section */}
        <ImageBackground
          style={styles.gapImage}
          resizeMode="cover"
          source={require("../assets/gap1.png")}
        />

      </ScrollView>

      {/* Profile Form */}
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
    paddingBottom: 70,
  },
  greetingContainer: {
    paddingTop: Padding.p_9xl,
    justifyContent: "center",
    alignItems: "center",
  },
  greetingInner: {
    width: 412,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    width: 48,
    height: 48,
  },
  greetingText: {
    marginLeft: 24,
  },
  greetingFont: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
  },
  greeting: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  greeting2: {
    textAlign: "center",
  },
  notificationIcon: {
    width: 24,
    height: 24,
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
    position: "relative",
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
    position: "absolute",
    top: 230,
    zIndex: 1,
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
  createPlotText: {
    fontSize: FontSize.titleT3SemiBold_size,
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    textAlign: "center",
  },
  gapImage: {
    borderRadius: Border.br_5xs,
    width: 316,
    height: 210,
    marginVertical: 16,
  },
});

export default Home;
