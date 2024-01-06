import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormSection from "../components/FormSection";
import ProfileForm from "../components/ProfileForm";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import{ ImagesAssets } from '../assets/ImagesAssets';


// import profileImage from "../assets/profile.png";
// import settingsIcon from "../assets/iconssetting.png";
// import notificationIcon from "../assets/iconsnotification.png";



const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.androidLarge1, styles.androidLarge1Layout]}>
      <View style={[styles.frameParent, styles.text2Position]}>
        <View style={[styles.frameGroup, styles.groupFlexBox]}>
          <View style={styles.avatarParent}>
            <View style={styles.avatar}>
              <Image
                style={[
                  styles.circle40invisibleIcon,
                  styles.androidLarge1Layout,
                ]}
                resizeMode="cover"
                source={require("../assets/profile.png")} // Ensure the path is correct
                //source={ImagesAssets.profile}
                //source={profileImage}
                //const imageUrl = 'https://img2.pic.in.th/pic/is4af015e9a46d5b12.png'
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>สวัสดี</Text>
              <Text style={[styles.text, styles.textTypo]}>เกษตรกร</Text>
            </View>
          </View>
          <View style={styles.systemIconssettingParent}>
            <Image
              style={styles.systemLayout}
              resizeMode="cover"
              source={require("../assets/iconssetting.png")} // Ensure the path is correct
              //source={settingsIcon}
              //source={ImagesAssets.iconssetting}
              //const imageUrl = 'https://img2.pic.in.th/pic/is4af015e9a46d5b12.png'

            />
            <Image
              style={[styles.systemIconsnotification, styles.systemLayout]}
              resizeMode="cover"
              source={require("../assets/iconsnotification.png")} // Ensure the path is correct
              //source={notificationIcon}
              //source={ImagesAssets.iconsnotification}
              //const imageUrl = 'https://img2.pic.in.th/pic/is4af015e9a46d5b12.png'
            />
          </View>
        </View>
        {/* ... (your existing code) */}
      </View>
      <ProfileForm showHomeIndicator={false} />
    </View>
  );
};


const styles = StyleSheet.create({
  androidLarge1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  text2Position: {
    left: 0,
    position: "absolute",
  },
  groupFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.size_smi,
  },
  systemLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  circle40invisibleIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5000,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  avatar: {
    width: 40,
    height: 40,
  },
  text: {
    color: Color.labelColorLightPrimary,
  },
  parent: {
    marginLeft: 8,
  },
  avatarParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  systemIconsnotification: {
    marginLeft: 8,
  },
  systemIconssettingParent: {
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  systemIconsaddCircle: {
    top: 0,
    left: 14,
    position: "absolute",
  },
  text2: {
    top: 24,
    color: Color.gray300,
    left: 0,
    position: "absolute",
  },
  systemIconsaddCircleParent: {
    width: 52,
    height: 45,
  },
  groupWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.success50,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    marginTop: 8,
    alignItems: "center",
  },
  frameParent: {
    top: 40,
    width: 360,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  androidLarge1: {
    backgroundColor: Color.gray00,
    flex: 1,
    height: 800,
  },
});

export default AndroidLarge1;
