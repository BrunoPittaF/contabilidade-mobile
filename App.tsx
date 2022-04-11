import { Login } from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "./src/components/Header";
import { Register } from "./src/pages/Register";
import React from "react";
import { navigationRef } from "./src/RootNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{
            header: () => <Header />,
          }}
          component={Login}
        />

        <Stack.Screen
          name="Register"
          options={{
            header: () => <Header />,
          }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
