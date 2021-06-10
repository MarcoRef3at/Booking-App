import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Components/navigation/AppNavigator";

AppNavigator;
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
