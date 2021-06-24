import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeekView from "react-native-week-view";
const WeekViews = () => {
  const myEvents = [
    {
      id: 1,
      description: "Event",
      startDate: new Date(),
      endDate: new Date(),
      color: "blue",
      // ... more properties if needed,
    },
  ];
  return (
    <WeekView
      events={myEvents}
      selectedDate={new Date()}
      numberOfDays={7}
      onEventPress={() => console.log("pressed")}
      onGridClick={(x, y, z) => {
        // console.log("x:", x);
        console.log("y:", y);
        console.log("z:", z);
      }}
      showNowLine
      nowLineColor={"red"}
      timeStep={30}
      startHour={10}
      hoursInDisplay={6}
    />
  );
};

export default WeekViews;

const styles = StyleSheet.create({});
