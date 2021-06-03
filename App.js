import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppCalendar from "./Components/Calendar";
import { Clock } from "./Components/Clock";
import TimelineCalendarScreen from "./Components/TimelineCalendarScreen";
import TimeTable from "./Components/TimeTable";
export default function App() {
  return (
    <AppCalendar />
    // <Clock />
    // <TimeTable />
    // <TimelineCalendarScreen />
    // <registerScreens />
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
