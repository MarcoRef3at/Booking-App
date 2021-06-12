import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppButton from "./Button";
import defaultStyles from "./../Config/styles";

const FormPicker = ({ header, data, navigate }) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={defaultStyles.modalHeader}>{header}</Text>
        )}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppButton
            title={item.displayName}
            onPress={() => {
              // console.log("item:", item);
              navigate({ id: item.id });
            }}
          />
        )}
      />
    </View>
  );
};

export default FormPicker;

const styles = StyleSheet.create({});
