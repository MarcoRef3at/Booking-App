import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import ScreenServices from "./../Screens/ScreenServices";
import AppCalendar from "./../Calendar";

const Stack = createStackNavigator();
const SettingsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Calendar" component={AppCalendar} />
  </Stack.Navigator>
);

export default SettingsNavigator;
