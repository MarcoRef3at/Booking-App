import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from "../Config/colors";
const ScreenProgress = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animation/done.json")}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

export default ScreenProgress;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});
