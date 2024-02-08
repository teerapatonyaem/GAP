const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import L from "./screens/L";
import Home from "./screens/Home";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Frame from "./screens/Frame";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Screen7 from "./screens/Screen7";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Plot from "./screens/Plot";
import Frame1 from "./components/Frame1";
import Modal1 from "./components/Modal1";
import IconixtolineararrowLeft from "./components/IconixtolineararrowLeft";
import L1 from "./screens/L1";
import Modal2 from "./components/Modal2";
import Modal3 from "./screens/Modal3";
import Modal4 from "./components/Modal4";
import Modal5 from "./screens/Modal5";
import Frame2 from "./screens/Frame2";
import Modal6 from "./components/Modal6";
import Screen8 from "./screens/Screen8";

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
              name="L"
              component={L}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
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
              name="Frame"
              component={Frame}
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
              name="Screen7"
              component={Screen7}
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
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="L1"
              component={L1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modal3"
              component={Modal3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modal5"
              component={Modal5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen8"
              component={Screen8}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
