import React, { useEffect, useState } from "react";
import moment from "moment";
import { View } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppButton from "./Shared/Button";
import { Picker } from "@react-native-picker/picker";

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);

const AppCalendar = ({
  navigation: { navigate },
  calendarAvailablilty = { ID: 13, Nm: "All" },
  route: { params },
}) => {
  const calendarType = params.calendarTypeId.id; // 0 -> single Day , 1-> period , 2->multiple
  const { businessId } = params;
  const { businessName } = params;
  const { serviceId } = params;
  const { serviceName } = params;

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

    // console.log("markedDates:", markedDates);
  };

  const onTimeSelect = (event, selectedTime) => {
    const formatTime = moment(selectedTime);
    setShowClock(Platform.OS === "ios");
    setTime(moment(selectedTime).format("HH:mm"));
    let dates = Object.keys(markedDates);
    let hourTime = moment(selectedTime).format("HH:mm");
    dates.map((date, i) => {
      dates[i] = moment(dates[i] + " " + hourTime).utc(2);
    });

    selectedTime != null &&
      navigate("Details", {
        time: formatTime,
        dates,
        businessId,
        serviceId,
        businessName,
        serviceName,
      });
  };

  const onPeriodSelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);
    let selected = true;
    let updatedMarkedDates = {};
    if (
      Object.keys(markedDates).length === 0 &&
      markedDates.constructor === Object &&
      calendarType == 1
    ) {
      updatedMarkedDates = {
        ...markedDates,
        ...{ [_selectedDay]: { selected, startingDay: true, color: "green" } },
      };
    } else {
      const startDay = new Date(Object.keys(markedDates)[0]);
      const endDay = new Date(day.dateString);
      const numberOfDays =
        (endDay.getTime() - startDay.getTime()) / (1000 * 3600 * 24);
      let daysBetween = {};
      for (var x = 1; x < numberOfDays; x++) {
        let day = moment(startDay).add(x, "days").format(_format);
        daysBetween = {
          ...daysBetween,
          ...{ [day]: { selected, color: "green" } },
        };
      }
      updatedMarkedDates = {
        ...markedDates,
        ...daysBetween,
        ...{ [_selectedDay]: { selected, endingDay: true, color: "green" } },
      };
      setShowClock(true);
    }
    setMarkedDates(updatedMarkedDates);
    // console.log("markedDates:", markedDates);
  };

  useEffect(() => {
    setMarkedDates({});
    if (calendarAvailablilty.ID < 12 && calendarAvailablilty.ID > 0) {
      availableDates(calendarAvailablilty.ID * 30);
      allBlocked = true;
    }
  }, []);
  // let unitItems = unit.map((s, i) => {
  //   return <Picker.Item key={i} value={s} label={s} />;
  // });

  return (
    <View>
      <Calendar
        firstDay={6}
        minDate={_today}
        pastScrollRange={0}
        futureScrollRange={12}
        onDayPress={calendarType == 0 ? onDaySelect : onPeriodSelect}
        markedDates={markedDates}
        markingType={calendarType == 1 ? "period" : "custom"}
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

      {/* <Picker
            style={{
              width: 200,
              height: 44,
            }}
            itemStyle={{ height: 44 }}
            selectedValue={selectedUnit}
            onValueChange={(itemValue, itemIndex) => setSelectedUnit(itemValue)}
          >
            {unitItems}
          </Picker> */}
      {calendarType != 0 && calendarType != 1 && (
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
