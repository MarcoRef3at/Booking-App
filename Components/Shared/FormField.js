import React from "react";
import AppTextInput from "./TextInput";

function FormField({ value, width = "100%", setValue, ...otherProps }) {
  return (
    <>
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
    </>
  );
}

export default FormField;
