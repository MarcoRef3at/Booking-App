import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "../Shared/Button";
import defaultStyles from "./../Config/styles";
import FormPicker from "./../Shared/FormPicker";

const ScreenBusinesses = ({ navigation: { navigate } }) => {
  const [businesses, setBusinesses] = useState([]);
  const getBusinesses = () => {
    setTimeout(() => {
      microsoftApi
        .get(endPoints.ListBusinesses)

        .then((response) => {
          // console.log("response:", response.data.value);
          setBusinesses(response.data.value);
        })

        .catch((error) => {
          console.log("error:", error.response.data.error.message);
          Alert.alert("Error", error.response.data.error.message);
        });
    }, 500);
  };

  useEffect(() => {
    getBusinesses();
  }, []);

  return (
    <View>
      <FormPicker
        header={"Select Business"}
        data={businesses}
        navigate={(id) => navigate("Service", id)}
      />
    </View>
  );
};

export default ScreenBusinesses;

const styles = StyleSheet.create({});
