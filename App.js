const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Screen14 from "./screens/Screen14";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Frame from "./screens/Frame";
import Screen7 from "./screens/Screen7";
import Screen8 from "./screens/Screen8";
import Screen9 from "./screens/Screen9";
import Frame1 from "./screens/Frame1";
import Screen10 from "./screens/Screen10";
import Frame2 from "./screens/Frame2";
import Screen11 from "./screens/Screen11";
import Screen12 from "./screens/Screen12";
import Screen13 from "./screens/Screen13";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Screen14"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Screen14"
              component={Screen14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen3"
              component={Screen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen4"
              component={Screen4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen5"
              component={Screen5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen6"
              component={Screen6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen7"
              component={Screen7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen8"
              component={Screen8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen9"
              component={Screen9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen10"
              component={Screen10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen11"
              component={Screen11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen12"
              component={Screen12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen13"
              component={Screen13}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
