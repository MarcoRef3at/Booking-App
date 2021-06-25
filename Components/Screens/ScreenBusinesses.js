import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "../Shared/Button";
import defaultStyles from "./../Config/styles";
import FormPicker from "./../Shared/FormPicker";
import ActivityIndicator from "./../Shared/ActivityIndicator";
import bussinessApi from "../api/bussinessApi";

const ScreenBusinesses = ({ navigation: { navigate } }) => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBusinesses = () => {
    setLoading(true);
    bussinessApi.loadBusinesses().then((values) => {
      setBusinesses(values);
    });
    setLoading(false);
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
      <ActivityIndicator visible={loading} />
    </View>
  );
};

export default ScreenBusinesses;

const styles = StyleSheet.create({});
