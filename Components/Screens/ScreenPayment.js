import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RNPaymobAccept } from "react-native-paymob-accept";
const ScreenPayment = () => {
  const [status, setstatus] = useState("starting");
  const [message, setmessage] = useState("--");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcome}>☆RNPaymobAccept example☆</Text>
        <Text style={styles.instructions}>STATUS: {status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{message}</Text>
      </View>
    </View>
  );
};

export default ScreenPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
