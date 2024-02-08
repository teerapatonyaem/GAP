import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Home2background from "../components/Home2background";
import Modal4 from "../components/Modal4";
import Frame1 from "../components/Frame1";
import { useNavigation } from "@react-navigation/native";
import Bottombar from "../components/Bottombar";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Home = () => {
  const [frameContainer16Visible, setFrameContainer16Visible] = useState(false);
  const [frameContainer18Visible, setFrameContainer18Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer16 = useCallback(() => {
    setFrameContainer16Visible(true);
  }, []);

  const closeFrameContainer16 = useCallback(() => {
    setFrameContainer16Visible(false);
  }, []);

  const openFrameContainer18 = useCallback(() => {
    setFrameContainer18Visible(true);
  }, []);

  const closeFrameContainer18 = useCallback(() => {
    setFrameContainer18Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.frameContainer}>
                <View style={styles.avatarParent}>
                  <Image
                    style={styles.avatarIcon}
                    resizeMode="cover"
                    source={require("../assets/avatar.png")}
                  />
                  <View style={styles.parent}>
                    <Text style={[styles.text, styles.textFlexBox]}>
                      สวัสดี
                    </Text>
                    <Text style={[styles.text1, styles.textTypo]}>เกษตรกร</Text>
                  </View>
                </View>
                <Image
                  style={styles.iconixtolinearnotificationU}
                  resizeMode="cover"
                  source={require("../assets/iconixtolinearnotificationunread.png")}
                />
              </View>
            </View>
            <Home2background />
          </View>
          <View style={styles.group}>
            <Text style={[styles.text2, styles.textFlexBox]}>จัดการแปลง</Text>
            <View style={styles.frameView}>
              <Pressable
                style={[styles.framePressable, styles.frameFlexBox]}
                onPress={openFrameContainer16}
              >
                <View style={styles.wrapperShadowBox}>
                  <Image
                    style={styles.image32Icon}
                    resizeMode="cover"
                    source={require("../assets/image-32.png")}
                  />
                </View>
                <Text style={[styles.text3, styles.textTypo]}>แผนปลูก</Text>
              </Pressable>
              <Pressable
                style={[styles.frameParent1, styles.frameFlexBox]}
                onPress={openFrameContainer18}
              >
                <View style={styles.wrapperShadowBox}>
                  <Image
                    style={styles.image32Icon}
                    resizeMode="cover"
                    source={require("../assets/image-35.png")}
                  />
                </View>
                <Text style={[styles.text3, styles.textTypo]}>สำรวจ</Text>
              </Pressable>
              <Pressable
                style={[styles.frameParent1, styles.frameFlexBox]}
                onPress={() => navigation.navigate("Frame2")}
              >
                <View style={styles.wrapperShadowBox}>
                  <Image
                    style={styles.image32Icon}
                    resizeMode="cover"
                    source={require("../assets/image-33.png")}
                  />
                </View>
                <Text style={[styles.text3, styles.textTypo]}>สมาชิก</Text>
              </Pressable>
              <Pressable
                style={[styles.frameParent1, styles.frameFlexBox]}
                onPress={() => navigation.navigate("Screen3")}
              >
                <View style={styles.wrapperShadowBox}>
                  <Image
                    style={styles.image32Icon}
                    resizeMode="cover"
                    source={require("../assets/image-34.png")}
                  />
                </View>
                <Text style={[styles.text3, styles.textTypo]}>ยื่น GAP</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Bottombar />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer16Visible}>
        <View style={styles.frameContainer16Overlay}>
          <Pressable
            style={styles.frameContainer16Bg}
            onPress={closeFrameContainer16}
          />
          <Modal4 onClose={closeFrameContainer16} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer18Visible}>
        <View style={styles.frameContainer18Overlay}>
          <Pressable
            style={styles.frameContainer18Bg}
            onPress={closeFrameContainer18}
          />
          <Frame1 onClose={closeFrameContainer18} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
  },
  avatarIcon: {
    width: 48,
    height: 48,
  },
  text: {
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
    alignSelf: "stretch",
  },
  text1: {
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
    textAlign: "center",
  },
  parent: {
    marginLeft: 24,
  },
  avatarParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconixtolinearnotificationU: {
    width: 24,
    height: 24,
  },
  frameContainer: {
    justifyContent: "space-between",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    width: 412,
  },
  frameWrapper: {
    paddingTop: Padding.p_9xl,
  },
  frameGroup: {
    width: 412,
  },
  text2: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
  },
  frameContainer16Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer16Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  image32Icon: {
    width: 40,
    height: 40,
  },
  wrapperShadowBox: {
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 32,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: "rgba(6, 28, 61, 0.08)",
    alignItems: "center",
  },
  text3: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    marginTop: 4,
    textAlign: "center",
    alignSelf: "stretch",
  },
  framePressable: {
    flex: 1,
  },
  frameContainer18Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer18Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent1: {
    marginLeft: 8,
    flex: 1,
  },
  frameView: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  group: {
    marginTop: 51,
    shadowOpacity: 1,
    elevation: 32,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: "rgba(6, 28, 61, 0.08)",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 412,
  },
  frameParent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 412,
    overflow: "hidden",
  },
  home: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 712,
    overflow: "hidden",
    flex: 1,
  },
});

export default Home;
