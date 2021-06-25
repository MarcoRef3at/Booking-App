import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "../Shared/Button";
import defaultStyles from "./../Config/styles";
import FormPicker from "./../Shared/FormPicker";
import ActivityIndicator from "./../Shared/ActivityIndicator";
import servicesApi from "../api/servicesApi";
const ScreenServices = ({ route: { params }, navigation: { navigate } }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const businessId = params.id;

  const getServices = () => {
    setLoading(true);
    servicesApi
      .loadServices(businessId)
      .then((values) => {
        setServices(values);
      })
      .catch((err) => console.log("err:", err));
    setLoading(false);
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
      <ActivityIndicator visible={loading} />
    </View>
  );
};

export default ScreenServices;
