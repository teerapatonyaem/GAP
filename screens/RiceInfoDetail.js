import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageNumberYes from "../components/PageNumberYes";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const RiceInfoDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.riceinfodetail}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.riceInfoDetailScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.iconixtolinearreturnKeyParent}>
          <Pressable
            style={styles.iconixtolinearreturnKey}
            onPress={() => navigation.navigate("RiceInfo")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/iconixtolinearreturnkey.png")}
            />
          </Pressable>
          <Text style={styles.text}>องค์ความรู้เรื่องข้าว</Text>
        </View>
        <Image
          style={styles.image36Icon}
          resizeMode="cover"
          source={require("../assets/image-36.png")}
        />
      </View>
      <View style={styles.topCommandOnPreviewWrapper}>
        <PageNumberYes
          textPage="Page 1 of 100"
          divider={require("../assets/divider.png")}
          systemIconsZoomInZoomOut={require("../assets/1-system-iconszoom-in-zoom-out.png")}
          systemIconsFullscreen={require("../assets/1-system-iconsfullscreen.png")}
          systemIconsZoomInZoomOut1={require("../assets/1-system-iconszoom-in-zoom-out1.png")}
          pageNumberYesPosition="unset"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  riceInfoDetailScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconixtolinearreturnKey: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  iconixtolinearreturnKeyParent: {
    width: 328,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image36Icon: {
    height: 537,
    marginTop: 30,
    width: 380,
  },
  frameParent: {
    width: 380,
  },
  topCommandOnPreviewWrapper: {
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    marginTop: 10,
    alignItems: "center",
  },
  riceinfodetail: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default RiceInfoDetail;
