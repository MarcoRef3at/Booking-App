import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";

const ScreenServices = () => {
  const [businesses, setBusinesses] = useState([]);
  const getBusinesses = () => {
    setTimeout(() => {
      microsoftApi
        .get(endPoints.ListBusinesses)

        .then((response) => {
          console.log("response:", response.data.value);
          setBusinesses(response.data.value);
        })

        .catch((error) => {
          console.log("error:", error.response.data.error.message);
        });
    }, 500);
  };

  useEffect(() => {
    getBusinesses();
  }, []);

  return (
    <View>
      <Text>Screen Services</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={() => (
        //   <AppText style={defaultStyles.modalHeader}>{header}</AppText>
        // )}
        data={businesses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.displayName}</Text>}
      />
    </View>
  );
};

export default ScreenServices;

const styles = StyleSheet.create({});
