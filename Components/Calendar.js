import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, View } from "react-native";
import { Agenda } from "react-native-calendars";

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);
const _tomorrow = moment().add(1, "days").format(_format);
const _maxDate = moment().add(1, "years").format(_format);
const AppCalendar = ({ calendarAvailablilty = { ID: 13, Nm: "All" } }) => {
  let allBlocked = calendarAvailablilty.ID > 11 ? false : true;

  const [markedDates, setMarkedDates] = useState({});

  const onDaySelect = (day) => {
    console.log("day:", day);
    const _selectedDay = moment(day.dateString).format(_format);
    let selected = true;

    // Already in marked dates, so reverse current marked state
    if (markedDates[_selectedDay]) {
      selected = !markedDates[_selectedDay].selected;
    }

    // Create a new object using object property spread since it should be immutable
    // Reading: https://davidwalsh.name/merge-objects

    const updatedMarkedDates = {
      ...markedDates,
      ...{ [_selectedDay]: { selected } },
    };
    // Triggers component to render again, picking up the new state
    setMarkedDates(updatedMarkedDates);

    console.log("markedDates:", markedDates);
  };

  // A function to select available dates based on props
  const availableDates = (number) => {
    let dates = {};
    for (let i = 0; i < number; i++) {
      dates[moment().add(i, "days").format(_format)] = { selected: true };
    }
    setMarkedDates(dates);
  };

  useEffect(() => {
    setMarkedDates({});
    if (calendarAvailablilty.ID < 12 && calendarAvailablilty.ID > 0) {
      availableDates(calendarAvailablilty.ID * 30);
      allBlocked = true;
    }
  }, []);

  return (
    <Agenda
      firstDay={6}
      minDate={_today}
      pastScrollRange={0}
      futureScrollRange={12}
      // onDayPress={onDaySelect}
      onDayPress={(day) => {
        console.log(`${day} pressed`);
      }}
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: allBlocked ? "blue" : "blue",
        selectedDayTextColor: allBlocked ? "#ffffff" : "#d9e1e8",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
      }}
    />
  );
};

export default AppCalendar;
