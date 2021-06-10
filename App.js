import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppCalendar from "./Components/Calendar";
import ScreenServices from "./Components/Screens/ScreenServices";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Components/navigation/AppNavigator";

AppNavigator;
export default function App() {
  return (
    // <AppCalendar />
    // <ScreenServices />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
