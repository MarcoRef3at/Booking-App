import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import bookApi from "../api/bookApi";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "./../Shared/Button";
import FormField from "./../Shared/FormField";

const ScreenDetails = ({ route: { params }, navigation: { navigate } }) => {
  const { businessId } = params;
  const { serviceId } = params;
  const { time } = params;
  const { dates } = params;
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const postAppointment = (
    customerName = "Test Name",
    customerEmailAddress = "TestEmail@email.com",
    customerPhone = "Test Phone",
    customerNotes = "Test Notes",
    startTime = time,
    end
  ) => {
    setTimeout(() => {
      let host = `bookingBusinesses/${businessId}/appointments`;
      // for period
      if (dates.length > 1) {
        dates.map((d) => {
          bookApi.bookAppointment(
            businessId,
            customerEmailAddress,
            customerName,
            customerNotes,
            customerPhone,
            serviceId,
            d,
            d
          );
        });
      } else {
        bookApi.bookAppointment(
          businessId,
          customerEmailAddress,
          customerName,
          customerNotes,
          customerPhone,
          serviceId,
          startTime,
          startTime
        );
      }
    }, 1000);
  };
  return (
    <View>
      <FormField
        placeholder="Name"
        value={Name}
        setValue={(x) => setName(x)}
        icon="account"
      />
      <FormField
        placeholder="Email"
        value={email}
        setValue={(x) => setEmail(x)}
        icon="email"
      />
      <FormField
        placeholder="Phone"
        value={phone}
        setValue={(x) => setPhone(x)}
        icon="phone"
      />
      <FormField
        placeholder="Notes"
        value={notes}
        setValue={(x) => setNotes(x)}
        icon="note"
        multiline={true}
      />

      <AppButton
        title="Book"
        onPress={() => postAppointment(Name, email, phone)}
      />
    </View>
  );
};

export default ScreenDetails;

const styles = StyleSheet.create({});
