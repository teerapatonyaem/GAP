import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Screen8 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameParentShadowBox]}>
          <View style={[styles.inputParent, styles.inputParentSpaceBlock]}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>พืชชนิดอื่น</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
                />
              </View>
              <View style={styles.input1}>
                <View style={[styles.textfield, styles.swapItemFlexBox]}>
                  <Image
                    style={[styles.systemIconshome, styles.selectionTypeLayout]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome1.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>
                    พืชชนิดอื่น
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.component41}>
              <Text style={styles.text1}>ปริมาณ</Text>
              <View style={styles.label}>
                <View style={styles.parent}>
                  <Text style={[styles.text2, styles.text2Layout]}>น้อย</Text>
                  <View style={styles.selectionControl}>
                    <View style={styles.selectionTypeLayout}>
                      <View style={styles.radioPosition}>
                        <View
                          style={[styles.radioErrorState, styles.radioPosition]}
                        >
                          <View style={styles.circle} />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.checkbox, styles.textTypo]}>
                      Checkbox
                    </Text>
                  </View>
                </View>
                <View style={styles.group}>
                  <Text style={[styles.text2, styles.text2Layout]}>กลาง</Text>
                  <View style={styles.selectionControl}>
                    <View style={styles.selectionTypeLayout}>
                      <View style={styles.radioPosition}>
                        <View
                          style={[styles.radioErrorState, styles.radioPosition]}
                        >
                          <View style={styles.circle} />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.checkbox, styles.textTypo]}>
                      Checkbox
                    </Text>
                  </View>
                </View>
                <View style={styles.group}>
                  <Text style={[styles.text2, styles.text2Layout]}>มาก</Text>
                  <View style={styles.selectionControl}>
                    <View style={styles.selectionTypeLayout}>
                      <View style={styles.radioPosition}>
                        <View
                          style={[styles.radioErrorState, styles.radioPosition]}
                        >
                          <View style={styles.circle} />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.checkbox, styles.textTypo]}>
                      Checkbox
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.cardswapComponent, styles.inputParentSpaceBlock]}
          >
            <View style={[styles.swapItem, styles.swapItemFlexBox]}>
              <Text style={[styles.swapComponent, styles.text2Layout]}>
                เพิ่มข้อมูล
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frameParentSpaceBlock}>
          <View style={[styles.frameParent1, styles.frameParentShadowBox]}>
            <View style={[styles.inputParent, styles.inputParentSpaceBlock]}>
              <View style={styles.input}>
                <View style={styles.label}>
                  <Text style={styles.label1}>วัชพืช</Text>
                  <Image
                    style={styles.iconStatus}
                    resizeMode="cover"
                    source={require("../assets/icon-status.png")}
                  />
                </View>
                <View style={styles.input1}>
                  <View style={[styles.textfield, styles.swapItemFlexBox]}>
                    <Image
                      style={[
                        styles.systemIconshome,
                        styles.selectionTypeLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/1-system-iconshome1.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>วัชพืช</Text>
                  </View>
                </View>
              </View>
              <View style={styles.component41}>
                <Text style={styles.text1}>ปริมาณ</Text>
                <View style={styles.label}>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.text2Layout]}>น้อย</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text2, styles.text2Layout]}>กลาง</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text2, styles.text2Layout]}>มาก</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.cardswapComponent, styles.inputParentSpaceBlock]}
            >
              <View style={[styles.swapItem, styles.swapItemFlexBox]}>
                <Text style={[styles.swapComponent, styles.text2Layout]}>
                  เพิ่มข้อมูล
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.frameParentSpaceBlock]}>
            <View style={[styles.inputParent, styles.inputParentSpaceBlock]}>
              <View style={styles.input}>
                <View style={styles.label}>
                  <Text style={styles.label1}>โรคพืช</Text>
                  <Image
                    style={styles.iconStatus}
                    resizeMode="cover"
                    source={require("../assets/icon-status.png")}
                  />
                </View>
                <View style={styles.input1}>
                  <View style={[styles.textfield, styles.swapItemFlexBox]}>
                    <Image
                      style={[
                        styles.systemIconshome,
                        styles.selectionTypeLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/1-system-iconshome2.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>โรคพืช</Text>
                  </View>
                </View>
              </View>
              <View style={styles.component41}>
                <Text style={styles.text1}>ปริมาณ</Text>
                <View style={styles.label}>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.text2Layout]}>น้อย</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text2, styles.text2Layout]}>กลาง</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text2, styles.text2Layout]}>มาก</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.cardswapComponent, styles.inputParentSpaceBlock]}
            >
              <View style={[styles.swapItem, styles.swapItemFlexBox]}>
                <Text style={[styles.swapComponent, styles.text2Layout]}>
                  เพิ่มข้อมูล
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent5, styles.frameParentSpaceBlock]}>
            <View style={[styles.inputParent, styles.inputParentSpaceBlock]}>
              <View style={styles.input}>
                <View style={styles.label}>
                  <Text style={styles.label1}>แมลง</Text>
                  <Image
                    style={styles.iconStatus}
                    resizeMode="cover"
                    source={require("../assets/icon-status.png")}
                  />
                </View>
                <View style={styles.input1}>
                  <View style={[styles.textfield, styles.swapItemFlexBox]}>
                    <Image
                      style={[
                        styles.systemIconshome,
                        styles.selectionTypeLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/1-system-iconshome2.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>แมลง</Text>
                  </View>
                </View>
              </View>
              <View style={styles.component41}>
                <Text style={styles.text1}>ปริมาณ</Text>
                <View style={styles.label}>
                  <View style={styles.parent}>
                    <Text style={[styles.text2, styles.text2Layout]}>น้อย</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text2, styles.text2Layout]}>กลาง</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text2, styles.text2Layout]}>มาก</Text>
                    <View style={styles.selectionControl}>
                      <View style={styles.selectionTypeLayout}>
                        <View style={styles.radioPosition}>
                          <View
                            style={[
                              styles.radioErrorState,
                              styles.radioPosition,
                            ]}
                          >
                            <View style={styles.circle} />
                          </View>
                        </View>
                      </View>
                      <Text style={[styles.checkbox, styles.textTypo]}>
                        Checkbox
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.cardswapComponent, styles.inputParentSpaceBlock]}
            >
              <View style={[styles.swapItem, styles.swapItemFlexBox]}>
                <Text style={[styles.swapComponent, styles.text2Layout]}>
                  เพิ่มข้อมูล
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonParent}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Screen11")}
        >
          <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
        </Pressable>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Screen9")}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>เพิ่ม</Text>
        </Pressable>
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
  frameParentShadowBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(181, 201, 235, 0.15)",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  inputParentSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  swapItemFlexBox: {
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  selectionTypeLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    lineHeight: 24,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
  },
  text2Layout: {
    lineHeight: 18,
    fontFamily: FontFamily.labelLB4Regular,
  },
  radioPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frameParentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    height: 44,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  buttonTypo: {
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.buttonBT5SemiBold_size,
    textAlign: "left",
  },
  label1: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.descriptiveTextColourTextNormal700,
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  iconStatus: {
    marginLeft: 8,
    display: "none",
    height: 20,
    width: 20,
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconshome: {
    display: "none",
    overflow: "hidden",
  },
  text: {
    color: Color.descriptiveTextColourTextLighter400,
    flex: 1,
  },
  textfield: {
    borderColor: Color.disableDefaultDisableDefault,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  text1: {
    lineHeight: 22,
    textAlign: "right",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.buttonBT5SemiBold_size,
    fontFamily: FontFamily.labelLB4Regular,
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.bodyB6Regular_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  circle: {
    top: 2,
    left: 2,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorLightgray,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    height: 20,
    width: 20,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  radioErrorState: {
    overflow: "hidden",
  },
  checkbox: {
    display: "none",
    color: Color.descriptiveTextColourTextNormal700,
  },
  selectionControl: {
    flexDirection: "row",
  },
  parent: {
    alignItems: "center",
  },
  group: {
    marginLeft: 32,
    alignItems: "center",
  },
  component41: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputParent: {
    height: 80,
    flexDirection: "row",
  },
  swapComponent: {
    color: Color.primaryColourPrimary,
    fontSize: FontSize.buttonBT5SemiBold_size,
    textAlign: "left",
  },
  swapItem: {
    backgroundColor: Color.colorLavender_100,
    borderStyle: "dashed",
    borderColor: Color.colorRoyalblue,
    borderRadius: 0.001,
    paddingHorizontal: Padding.p_102xl,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardswapComponent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  frameParent1: {
    alignSelf: "stretch",
  },
  frameParent3: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(181, 201, 235, 0.15)",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  frameParent5: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(181, 201, 235, 0.15)",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  button1: {
    color: Color.primary600,
  },
  button: {
    backgroundColor: Color.primary100,
  },
  button3: {
    color: Color.surfaceColourWhiteSurface,
  },
  button2: {
    backgroundColor: Color.primary500,
    marginLeft: 8,
  },
  buttonParent: {
    width: 382,
    marginTop: 111,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  scrollview: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
  },
});

export default Screen8;
