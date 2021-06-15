import React, { useEffect, useState } from "react";
import moment from "moment";
import { View } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import microsoftApi from "./Config/microsoftApi";
import AppButton from "./Shared/Button";

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);

const AppCalendar = ({
  navigation: { navigate },
  calendarAvailablilty = { ID: 13, Nm: "All" },
  route: { params },
}) => {
  const calendarType = params.calendarTypeId.id;
  const { businessId } = params;
  const { serviceId } = params;

  let allBlocked = calendarAvailablilty.ID > 11 ? false : true;

  const [markedDates, setMarkedDates] = useState({});
  const [showClock, setShowClock] = useState(false);
  const [time, setTime] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date());
  // A function to select available dates based on props
  const availableDates = (number) => {
    let dates = {};
    for (let i = 0; i < number; i++) {
      dates[moment().add(i, "days").format(_format)] = { selected: true };
    }
    setMarkedDates(dates);
  };

  const onDaySelect = (day) => {
    setTargetDate(new Date(day.timestamp));
    const _selectedDay = moment(day.dateString).format(_format);
    let selected = true;

    // Already in marked dates, so reverse current marked state
    if (markedDates[_selectedDay]) {
      selected = !markedDates[_selectedDay].selected;
    } else {
      setShowClock(true);
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

  const onTimeSelect = (event, selectedTime) => {
    console.log("selectedTime:", moment.utc(selectedTime + "+02:00"));

    setShowClock(Platform.OS === "ios");
    setTime(moment(selectedTime));
    params.calendarTypeId.id == 0 &&
      navigate("Details", { time, businessId, serviceId });
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
      <Calendar
        firstDay={6}
        minDate={_today}
        pastScrollRange={0}
        futureScrollRange={12}
        onDayPress={onDaySelect}
        markedDates={calendarType != 0 ? markedDates : null}
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
          value={targetDate}
          mode={"time"}
          is24Hour={false}
          display="default"
          onChange={onTimeSelect}
        />
      )}
      {params.calendarTypeId.id != 0 && (
        <AppButton
          title="next"
          onPress={() => {
            console.log("markedDates:", markedDates);
            navigate("Details", { time, businessId, serviceId });
          }}
        />
      )}
    </View>
  );
};

export default AppCalendar;
