import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
const _format = "YYYY-MM-DD";
const _today = moment().format(_format);
const AppCalendar = () => {
  const [markedDates, setMarkedDates] = useState({});

  const onDaySelect = (day) => {
    setMarkedDates({});
    console.log("day:", day);
    const _selectedDay = moment(day.dateString).format(_format);
    let selected = true;

    // Already in marked dates, so reverse current marked state
    if (markedDates[_selectedDay]) {
      console.log("markedDates[_selectedDay]:", markedDates[_selectedDay]);
      selected = !markedDates[_selectedDay].selected;
    }
    // Create a new object using object property spread since it should be immutable
    const updatedMarkedDates = {
      ...markedDates,
      ...{ [_selectedDay]: { selected } },
    };
    // Triggers component to render again, picking up the new state
    setMarkedDates(updatedMarkedDates);

    console.log("markedDates:", markedDates);
  };

  return (
    <Calendar
      firstDay={6}
      minDate={_today}
      pastScrollRange={0}
      futureScrollRange={12}
      onDayPress={onDaySelect}
      markedDates={markedDates}
    />
  );
};

export default AppCalendar;

const styles = StyleSheet.create({});
