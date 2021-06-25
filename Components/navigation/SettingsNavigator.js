import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import ScreenServices from "./../Screens/ScreenServices";
import AppCalendar from "./../Calendar";
import ScreenPayment from "./../Screens/ScreenPayment";
import TimeTable from "./../TimeTable";
import WeekViews from "./../WeekView";
import ActivityIndicator from "./../Shared/ActivityIndicator";

const Stack = createStackNavigator();
const SettingsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Payment" component={ActivityIndicator} />
  </Stack.Navigator>
);

export default SettingsNavigator;
