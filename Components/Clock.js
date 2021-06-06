import React, { useEffect, useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export const Clock = ({ setShowClock, dateSelected, setTimeSelected }) => {
  const [date, setDate] = useState(new Date(dateSelected.timestamp));

  const onChange = (event, selectedDate) => {
    console.log("selectedDate:", moment(selectedDate).format("HH:mm"));
    const currentDate = selectedDate || date;

    setShowClock(Platform.OS === "ios");
    setDate(currentDate);
    setTimeSelected(moment(selectedDate).format("HH:mm"));
  };

  useEffect(() => {
    // setDate(selectedDay);
    // console.log(" moment(selectedDay)", selectedDay.timestamp);
  }, []);

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"time"}
        is24Hour={false}
        display="default"
        onChange={onChange}
      />
    </View>
  );
};
