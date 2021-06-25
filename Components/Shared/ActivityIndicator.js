import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = true }) => {
  if (!visible) return null;

  return (
    <View style={styles.animationContainer}>
      <LottieView
        style={{
          width: 400,
          height: 400,
        }}
        autoPlay
        loop
        source={require("./loader3.json")}
      />
    </View>
  );
};

export default ActivityIndicator;
const styles = StyleSheet.create({
  animationContainer: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
  },
});
