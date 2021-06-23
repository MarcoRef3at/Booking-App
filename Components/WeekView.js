import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeekView from "react-native-week-view";
const WeekViews = () => {
  const myEvents = [];
  return (
    <WeekView
      events={myEvents}
      selectedDate={new Date()}
      numberOfDays={7}
      onEventPress={() => console.log("pressed")}
      onGridClick={(x, y, z) => {
        console.log("x:", x);
        console.log("y:", y);
        console.log("z:", z);
      }}
    />
  );
};

export default WeekViews;

const styles = StyleSheet.create({});
