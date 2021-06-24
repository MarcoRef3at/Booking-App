import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const BookingCalendar = () => {
  const onButtonPress = (d) => {
    console.log(d);
  };
  const dateTimeObj = {
    "2021-6-14": {
      "12:00": { row: <Text>〇</Text>, onPress: onButtonPress },
      "13:00": { row: <Text>Tel</Text>, onPress: onButtonPress },
    },
  };

  const defaultRow = {
    row: <Text>× </Text>,
    onPress: onButtonPress,
  };
  return (
    <BookingCalendar
      defaultRow={defaultRow}
      startDate={new Date()}
      startTime={new Date()}
      endTime={new Date(new Date().setDate(new Date().getDate() + 1))}
      intervalMinutes={30}
      dateTime={dateTimeObj}
      backgroundColor="#e0e0e0"
      borderColor="pink"
      fontColor="blue"
    />
  );
};

export default BookingCalendar;

const styles = StyleSheet.create({});
