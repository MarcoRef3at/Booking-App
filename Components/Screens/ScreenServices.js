import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "../Shared/Button";
import defaultStyles from "./../Config/styles";
import FormPicker from "./../Shared/FormPicker";
const ScreenServices = ({ route: { params }, navigation: { navigate } }) => {
  const [services, setServices] = useState([]);
  const getServices = () => {
    setTimeout(() => {
      microsoftApi
        .get(
          `${endPoints.ListBusinesses}/${params.id}${endPoints.ListServices}`
        )

        .then((response) => {
          console.log("response:", response.data.value);
          setServices(response.data.value);
        })

        .catch((error) => {
          console.log("error:", error.response.data.error.message);
          Alert.alert("Error", error.response.data.error.message);
        });
    }, 500);
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <View>
      <FormPicker
        header="Select Service"
        data={services}
        navigate={(id) => navigate("CalendarType", id)}
      />
    </View>
  );
};

export default ScreenServices;
