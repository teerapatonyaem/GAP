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
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Screen3 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.scrollview, styles.iconLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.iconixtolinearreturnKeyParent}>
            <Pressable
              style={styles.iconixtolinearreturnKeyLayout}
              onPress={() => navigation.navigate("Screen4")}
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
            style={[styles.image16Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-16.png")}
          />
        </View>
        <View style={styles.topCommandOnPreview}>
          <Text style={styles.text1}>Page 1 of 100</Text>
          <Image
            style={[styles.dividerIcon, styles.dividerIconSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/divider1.png")}
          />
          <Image
            style={[
              styles.systemIconszoomInZoomOut,
              styles.dividerIconSpaceBlock,
            ]}
            resizeMode="cover"
            source={require("../assets/1-system-iconszoom-in-zoom-out2.png")}
          />
          <Image
            style={[
              styles.systemIconszoomInZoomOut,
              styles.dividerIconSpaceBlock,
            ]}
            resizeMode="cover"
            source={require("../assets/1-system-iconsfullscreen1.png")}
          />
          <Image
            style={[
              styles.systemIconszoomInZoomOut,
              styles.dividerIconSpaceBlock,
            ]}
            resizeMode="cover"
            source={require("../assets/1-system-iconszoom-in-zoom-out3.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  dividerIconSpaceBlock: {
    marginLeft: 16,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconixtolinearreturnKeyLayout: {
    height: 24,
    width: 24,
  },
  text: {
    fontSize: FontSize.titleT4SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.buttonBT5SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  iconixtolinearreturnKeyParent: {
    width: 328,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  image16Icon: {
    height: 470,
    marginTop: 30,
    alignSelf: "stretch",
    overflow: "hidden",
    maxWidth: "100%",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.labelLB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.labelLB4Regular,
    color: Color.descriptiveTextColourTextLight500,
    textAlign: "left",
  },
  dividerIcon: {
    maxHeight: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
    width: "100%",
  },
  systemIconszoomInZoomOut: {
    height: 24,
    width: 24,
  },
  topCommandOnPreview: {
    borderRadius: Border.br_980xl,
    shadowColor: "rgba(59, 89, 152, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  scrollview: {
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen3;
