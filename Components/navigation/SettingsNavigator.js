import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenServices from "./../Screens/ScreenServices";

const Stack = createStackNavigator();
const SettingsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Settings" component={ScreenServices} />
  </Stack.Navigator>
);

export default SettingsNavigator;
