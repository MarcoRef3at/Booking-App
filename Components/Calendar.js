import React, { useEffect, useState } from "react";
import moment from "moment";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);

const AppCalendar = ({ calendarAvailablilty = { ID: 13, Nm: "All" } }) => {
  let allBlocked = calendarAvailablilty.ID > 11 ? false : true;

  const [markedDates, setMarkedDates] = useState({});
  const [showClock, setShowClock] = useState(false);
  const [time, setTime] = useState(new Date());

  // A function to select available dates based on props
  const availableDates = (number) => {
    let dates = {};
    for (let i = 0; i < number; i++) {
      dates[moment().add(i, "days").format(_format)] = { selected: true };
    }
    setMarkedDates(dates);
  };

  const onDaySelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);
    let selected = true;

    // Already in marked dates, so reverse current marked state
    if (markedDates[_selectedDay]) {
      selected = !markedDates[_selectedDay].selected;
    } else {
      setShowClock(true);
    }

    // Create a new object using object property spread since it should be immutable
    // Reading: https://davidwalsh.name/merge-objects
    const updatedMarkedDates = {
      ...markedDates,
      ...{ [_selectedDay]: { selected, time } },
    };
    // Triggers component to render again, picking up the new state
    setMarkedDates(updatedMarkedDates);

    console.log("markedDates:", markedDates);
  };

  const onTimeSelect = (event, selectedTime) => {
    console.log("selectedTime:", moment(selectedTime).format("HH:mm"));

    setShowClock(Platform.OS === "ios");
    setTime(moment(selectedTime).format("HH:mm"));
  };

  useEffect(() => {
    setMarkedDates({});
    if (calendarAvailablilty.ID < 12 && calendarAvailablilty.ID > 0) {
      availableDates(calendarAvailablilty.ID * 30);
      allBlocked = true;
    }
  }, []);

  return (
    <View>
      <CalendarList
        firstDay={6}
        minDate={_today}
        pastScrollRange={0}
        futureScrollRange={12}
        onDayPress={onDaySelect}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: allBlocked ? "blue" : "blue",
          selectedDayTextColor: allBlocked ? "#ffffff" : "#d9e1e8",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
        }}
      />
      {showClock && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"time"}
          is24Hour={false}
          display="default"
          onChange={onTimeSelect}
        />
      )}
    </View>
  );
};

export default AppCalendar;
