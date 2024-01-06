const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AndroidLarge1 from "./screens/AndroidLarge1";
import SmallSizeTrueStyleSolid from "./components/SmallSizeTrueStyleSolid";
import StateDefault from "./components/StateDefault";
import TypeDatepicker from "./components/TypeDatepicker";
import Property1Default from "./components/Property1Default";
import Property1Default1 from "./components/Property1Default1";
import Property1Default2 from "./components/Property1Default2";
import StateDefault1 from "./components/StateDefault1";
import TypeTextfield from "./components/TypeTextfield";
import LabelAboveHintNone from "./components/LabelAboveHintNone";
import StyleSimpleActiveNo from "./components/StyleSimpleActiveNo";
import DarkModeFalse from "./components/DarkModeFalse";
import StyleStandardActiveNo from "./components/StyleStandardActiveNo";
import AndroidLarge2 from "./screens/AndroidLarge2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
