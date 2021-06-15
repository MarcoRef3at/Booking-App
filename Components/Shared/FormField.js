import React from "react";
import AppTextInput from "./TextInput";
import { View } from "react-native";

function FormField({ value, width = "90%", setValue, ...otherProps }) {
  return (
    <View
      style={{
        paddingHorizotal: 10,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <AppTextInput
        value={value}
        onBlur={() => {
          value == null && setValue("");
        }}
        onChangeText={(value) => {
          setValue(value);
        }}
        width={width}
        {...otherProps}
      />
    </View>
  );
}

export default FormField;
