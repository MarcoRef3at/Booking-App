import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, LogBox } from "react-native";
import bookApi from "../api/bookApi";
import AppButton from "./../Shared/Button";
import FormField from "./../Shared/FormField";
import ScreenProgress from "./ScreenProgress";
import { moment } from "moment";
import AppText from "./../Shared/Text";
import defaultStyles from "./../Config/styles";

const ScreenBook = ({ route: { params }, navigation: { navigate } }) => {
  console.log("params:", params);
  const { businessId } = params;
  const { businessName } = params;
  const { serviceId } = params;
  const { serviceName } = params;
  const { time } = params;
  const { dates } = params;
  const { Name } = params;
  const { email } = params;
  const { phone } = params;

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
      <AppText style={[defaultStyles.textHeader]}>
        {Name ? `${Name} is` : "You are"} about to book
      </AppText>
      <AppText style={[defaultStyles.textHeader3]}>
        {serviceName} in {businessName}
      </AppText>
      <AppText style={[defaultStyles.textHeader3]}>During The Period :</AppText>

      <AppText style={[defaultStyles.textHeader3]}>
        {dates.length > 1 ? "From" : "On"} {dates[0].format("DD-MMM-YYYY")}
      </AppText>
      {dates.length > 1 && (
        <AppText style={[defaultStyles.textHeader3]}>
          To : {dates[dates.length - 1].format("DD-MMM-YYYY")}
        </AppText>
      )}

      <AppText style={[defaultStyles.textHeader3]}>
        At {time.format("hh:mm a")}
      </AppText>

      <AppText style={[defaultStyles.textHeader2]}>
        Review Your Contacts Before Submit
      </AppText>

      <AppText style={[defaultStyles.textHeader3]}>Email : {email}</AppText>
      <AppText style={[defaultStyles.textHeader3]}>Phone : {phone}</AppText>

      <AppButton
        title="Book"
        onPress={() => postAppointment(Name, email, phone)}
      />

      <ScreenProgress
        onDone={() => navigate("Business")}
        visible={showProgress}
        progress={progress}
      />
    </View>
  );
};

export default ScreenBook;

const styles = StyleSheet.create({});
