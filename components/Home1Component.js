import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Modal2 from "./Modal2";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home1Component = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.avatarParent}>
              <Image
                style={styles.avatarIcon}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={styles.parent}>
                <Text style={styles.text}>สวัสดี</Text>
                <Text style={styles.text1}>เกษตรกร</Text>
              </View>
            </View>
            <Image
              style={styles.iconixtolinearnotificationU}
              resizeMode="cover"
              source={require("../assets/iconixtolinearnotificationunread.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.frameContainer, styles.wrapperSpaceBlock]}
          onPress={openFrameContainer7}
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
              source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-11.png")}
            />
            <View
              style={[
                styles.iconixtolinearaddSquareParent,
                styles.parentShadowBox,
              ]}
            >
              <Image
                style={styles.avatarIcon}
                resizeMode="cover"
                source={require("../assets/iconixtolinearaddsquare.png")}
              />
              <View style={[styles.wrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.text2}>สร้างแปลง</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer7Visible}>
        <View style={styles.frameContainer7Overlay}>
          <Pressable
            style={styles.frameContainer7Bg}
            onPress={closeFrameContainer7}
          />
          <Modal2 onClose={closeFrameContainer7} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 412,
    alignItems: "center",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    marginTop: 8,
    flex: 1,
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
  avatarIcon: {
    width: 48,
    height: 48,
  },
  text: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
    alignSelf: "stretch",
  },
  text1: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
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
  frameGroup: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 412,
  },
  frameWrapper: {
    paddingTop: Padding.p_9xl,
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer7Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  grassLandscapeFieldVectorP: {
    width: 307,
    height: 307,
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  text2: {
    fontSize: FontSize.titleT3SemiBold_size,
    letterSpacing: -0.2,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    display: "flex",
    flex: 1,
    textAlign: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    alignSelf: "stretch",
    marginTop: 8,
  },
  iconixtolinearaddSquareParent: {
    position: "absolute",
    top: 248,
    left: 17,
    backgroundColor: Color.baseColourWhite,
    shadowColor: "rgba(122, 90, 248, 0.24)",
    shadowRadius: 8,
    elevation: 8,
    width: 275,
    height: 91,
    padding: Padding.p_5xs,
    zIndex: 1,
    borderRadius: Border.br_base,
  },
  grassLandscapeFieldVectorPParent: {
    shadowColor: "rgba(152, 152, 152, 0.5)",
    shadowRadius: 30,
    elevation: 30,
    flexDirection: "row",
  },
  frameContainer: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
  },
  frameParent: {
    height: 423,
    alignItems: "center",
  },
});

export default Home1Component;
