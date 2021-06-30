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
  const images = {
    "Contoso@orascomdh.onmicrosoft.com":
      "https://gspace.mqrspaces.com/en/business/getlogo?h=240&w=240",
    "Test123@orascomdh.onmicrosoft.com":
      "data:image/png;base64,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",
  };
  return (
    <View>
      <FormPicker
        header={"Select Business"}
        data={businesses}
        navigate={(id) => navigate("Service", id)}
        images={images}
      />
      <ActivityIndicator visible={loading} />
    </View>
  );
};

export default ScreenBusinesses;

const styles = StyleSheet.create({});
