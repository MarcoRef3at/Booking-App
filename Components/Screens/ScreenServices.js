import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "../Shared/Button";
import defaultStyles from "./../Config/styles";
import FormPicker from "./../Shared/FormPicker";
const ScreenServices = ({ route: { params }, navigation: { navigate } }) => {
  const [services, setServices] = useState([]);
  const businessId = params.id;
  const getServices = () => {
    setTimeout(() => {
      microsoftApi
        .get(
          `${endPoints.ListBusinesses}/${businessId}${endPoints.ListServices}`
        )

        .then((response) => {
          // console.log("response:", response.data.value);
          setServices(response.data.value);
        })

        .catch((error) => {
          let Error = error.response.data.error.message;
          console.log("Error:", Error);
          Alert.alert("Error", Error);
          Error == "The specified folder could not be found in the store";
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
        navigate={(serviceId) => {
          navigate("CalendarType", { serviceId, businessId });
        }}
      />
    </View>
  );
};

export default ScreenServices;
