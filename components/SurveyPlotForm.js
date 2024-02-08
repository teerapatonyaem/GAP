import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SurveyPlotForm = () => {
  return (
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
                  source={require("../assets/1-system-iconshome.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>พืชชนิดอื่น</Text>
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
        <View style={[styles.cardswapComponent, styles.inputParentSpaceBlock]}>
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
                    style={[styles.systemIconshome, styles.selectionTypeLayout]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome.png")}
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
                    style={[styles.systemIconshome, styles.selectionTypeLayout]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome.png")}
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
                    style={[styles.systemIconshome, styles.selectionTypeLayout]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome.png")}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    alignItems: "center",
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
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
  },
  text2Layout: {
    lineHeight: 18,
    fontFamily: FontFamily.bodyB5Regular,
  },
  radioPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  frameParentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  label1: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.descriptiveTextColourTextNormal700,
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
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
    overflow: "hidden",
    display: "none",
  },
  text: {
    color: Color.disableDefaultOnDisableDefault,
    flex: 1,
  },
  textfield: {
    borderColor: Color.disableDefaultDisableDefault,
    borderStyle: "solid",
    borderWidth: 1,
    flex: 1,
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  text1: {
    lineHeight: 22,
    textAlign: "right",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.bodyB5Regular,
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.selectorS6SemiBold_size,
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
    backgroundColor: Color.baseColourWhite,
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
    fontSize: FontSize.bodySmalls300_size,
    textAlign: "left",
  },
  swapItem: {
    backgroundColor: Color.brightLightGreen200,
    borderStyle: "dashed",
    borderColor: Color.colorRoyalblue,
    borderRadius: 0.001,
    paddingHorizontal: Padding.p_102xl,
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "stretch",
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
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    alignItems: "center",
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
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
});

export default SurveyPlotForm;
