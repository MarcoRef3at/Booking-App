import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import bookApi from "../api/bookApi";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "./../Shared/Button";
import FormField from "./../Shared/FormField";
import ScreenProgress from "./ScreenProgress";

const ScreenDetails = ({ route: { params }, navigation: { navigate } }) => {
  const { businessId } = params;
  const { serviceId } = params;
  const { time } = params;
  const { dates } = params;
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const postAppointment = (
    customerName = "Test Name",
    customerEmailAddress = "TestEmail@email.com",
    customerPhone = "Test Phone",
    customerNotes = "Test Notes",
    startTime = time,
    end
  ) => {
    const book = (date) => {
      bookApi.bookAppointment(
        businessId,
        customerEmailAddress,
        customerName,
        customerNotes,
        customerPhone,
        serviceId,
        date,
        date
      );
    };
    setProgress(0);
    setShowProgress(true);
    // for period
    if (dates.length > 1) {
      dates.map((date) => {
        book(date);
        setProgress(progress + 1 / dates.length);
      });
    } else {
      book(startTime);
    }
    setProgress(1);
    // setShowProgress(false);
  };
  return (
    <View>
      <ScreenProgress
        onDone={() => navigate("Business")}
        visible={showProgress}
        progress={progress}
      />
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
