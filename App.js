const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import GreetingScreen from "./screens/GreetingScreen";
import Home from "./screens/Home";
import Text1 from "./components/Text1";
import AddPlotInformation from "./screens/AddPlotInformation";
import GAPCertify from "./screens/GAPCertify";
import Status1 from "./screens/Status1";
import Expense from "./screens/Expense";
import RiceInfo from "./screens/RiceInfo";
import RiceInfoDetail from "./screens/RiceInfoDetail";
import Proofile from "./screens/Proofile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Plot from "./screens/Plot";
import PlotSurvey from "./screens/PlotSurvey";
import Modal1 from "./components/Modal1";
import LogoutButton from "./components/LogoutButton";
import ClearUsersComponent from "./components/ClearUsersComponent";
import FertilizerModal from "./components/FertilizerModal";
import ChemicalsModal from "./components/ChemicalsModal";
import ExpensesModal from "./components/ExpensesModal";
import IconixtolineararrowLeft from "./components/IconixtolineararrowLeft";
import Modal2 from "./components/Modal2";
import TypeTextArea from "./components/TypeTextArea";
import StateDefault from "./components/StateDefault";
import IconixtolinearcheckboxCheck from "./components/IconixtolinearcheckboxCheck";
import StateDisable from "./components/StateDisable";
import Modal3 from "./screens/Modal3";
import Modal4 from "./screens/Modal4";
import Member from "./screens/Member";
import Modal5 from "./components/Modal5";
import HomeDetail from "./screens/HomeDetail";
import Revenue from "./screens/Revenue";
import CertifyDetail from "./screens/CertifyDetail";
import LabelAboveHintNone from "./components/LabelAboveHintNone";
import TypeTextfield from "./components/TypeTextfield";
import StateDefault1 from "./components/StateDefault1";
import Property1Frame from "./components/Property1Frame";
import SelectionControl from "./components/SelectionControl";
import TypeCheckbox from "./components/TypeCheckbox";
import TypeUncheckedStateDefault from "./components/TypeUncheckedStateDefault";
import Erroroff from "./components/Erroroff";
import TypeUnselectStateDefault from "./components/TypeUnselectStateDefault";
import Erroroff1 from "./components/Erroroff1";
import CardSwapComponent from "./components/CardSwapComponent";
import SwapItem from "./components/SwapItem";
import SmallSizeTrueStyleOutline from "./components/SmallSizeTrueStyleOutline";
import LabelAboveHintNone1 from "./components/LabelAboveHintNone1";
import LabelDefault from "./components/LabelDefault";
import TypeTextfield1 from "./components/TypeTextfield1";
import StyleStandardActiveNo from "./components/StyleStandardActiveNo";
import DarkModeFalse from "./components/DarkModeFalse";
import StyleSimpleActiveNo from "./components/StyleSimpleActiveNo";
import LabelNoneHintNone from "./components/LabelNoneHintNone";
import StateDefaultShowListOff from "./components/StateDefaultShowListOff";
import OnContainerOnImage from "./components/OnContainerOnImage";
import PageNumberYes from "./components/PageNumberYes";
import SmallSizeTrueStyleSolid1 from "./components/SmallSizeTrueStyleSolid1";
import TypePassword from "./components/TypePassword";
import StateDefaultShowPasswordO from "./components/StateDefaultShowPasswordO";
import Property1Frame1 from "./components/Property1Frame1";
import Property1Default from "./components/Property1Default";
import StateDefaultOptionListOff from "./components/StateDefaultOptionListOff";
import Property1Frame2 from "./components/Property1Frame2";
import StatusActiveLargeFalse from "./components/StatusActiveLargeFalse";
import Property1Default1 from "./components/Property1Default1";
import Property1Default2 from "./components/Property1Default2";
import Property1Default3 from "./components/Property1Default3";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="GreetingScreen"
                component={GreetingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LogoutButton"
                component={LogoutButton}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Modal2"
                component={Modal2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Modal5"
                component={Modal5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPlotInformation"
                component={AddPlotInformation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GAPCertify"
                component={GAPCertify}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Status1"
                component={Status1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Expense"
                component={Expense}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RiceInfo"
                component={RiceInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RiceInfoDetail"
                component={RiceInfoDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Proofile"
                component={Proofile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Plot"
                component={Plot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlotSurvey"
                component={PlotSurvey}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Modal3"
                component={Modal3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Modal4"
                component={Modal4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Modal1"
                component={Modal1}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="ClearUsersComponent"
                component={ClearUsersComponent}
                options={{ headerShown: false }}
              />
            <Stack.Screen
                name="FertilizerModal"
                component={FertilizerModal}
                options={{ headerShown: false }}
              />  
              <Stack.Screen
                name="ChemicalsModal"
                component={ChemicalsModal}
                options={{ headerShown: false }}
              />  
              <Stack.Screen
                name="ExpensesModal"
                component={ExpensesModal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Member"
                component={Member}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeDetail"
                component={HomeDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Revenue"
                component={Revenue}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CertifyDetail"
                component={CertifyDetail}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
