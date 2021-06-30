import React from "react";
import { StyleSheet, View } from "react-native";
import FormPicker from "./../Shared/FormPicker";

const ScreenCalendarType = ({
  navigation: { navigate },
  route: { params },
}) => {
  console.log("type params:", params);
  const calendarTypes = [
    { id: 0, displayName: "Single Day" },
    { id: 1, displayName: "Period of days with same time" },
  ];
  return (
    <View>
      <FormPicker
        header="Reservation Type"
        data={calendarTypes}
        navigate={(id) =>
          navigate("Calendar", {
            serviceId: params.serviceId.id,
            calendarTypeId: id,
            businessId: params.businessId,
          })
        }
      />
    </View>
  );
};

export default ScreenCalendarType;

const styles = StyleSheet.create({});
