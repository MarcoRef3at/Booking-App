import React from "react";
import { StyleSheet, View } from "react-native";
import FormPicker from "./../Shared/FormPicker";

const ScreenCalendarType = ({ navigation: { navigate } }) => {
  const calendarTypes = [
    { id: 0, displayName: "Single Day" },
    { id: 1, displayName: "Multiple Days with different Time" },
    { id: 2, displayName: "Period of days with same time" },
  ];
  return (
    <View>
      <FormPicker
        header="Reservation Type"
        data={calendarTypes}
        navigate={(id) => navigate("Calendar", id)}
      />
    </View>
  );
};

export default ScreenCalendarType;

const styles = StyleSheet.create({});
