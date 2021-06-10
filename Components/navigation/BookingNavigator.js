import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenServices from "./../Screens/ScreenServices";

const Stack = createStackNavigator();
const BookingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Booking" component={ScreenServices} />
  </Stack.Navigator>
);

export default BookingNavigator;
