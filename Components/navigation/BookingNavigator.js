import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenBusinesses from "./../Screens/ScreenBusinesses";
import ScreenServices from "./../Screens/ScreenServices";
import ScreenCalendarType from "./../Screens/ScreenCalendarType";
import AppCalendar from "./../Calendar";

const Stack = createStackNavigator();
const BookingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Business" component={ScreenBusinesses} />
    <Stack.Screen name="Service" component={ScreenServices} />
    <Stack.Screen name="CalendarType" component={ScreenCalendarType} />
    <Stack.Screen name="Calendar" component={AppCalendar} />
  </Stack.Navigator>
);

export default BookingNavigator;
