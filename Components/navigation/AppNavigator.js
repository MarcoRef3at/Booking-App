import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BookingNavigator from "./BookingNavigator";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Booking"
      component={BookingNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="barcode-scan"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="settings" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
