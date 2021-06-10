import { Platform } from "react-native";
import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    justifyContent: "center",
  },
  textHeader: {
    color: colors.dark,
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
  textHeader2: {
    color: colors.dark,
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  textHeader3: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
  modalHeader: {
    color: colors.dark,
    padding: 20,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
  submitButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: "30%",
  },
  formButton: {
    width: "50%",
    alignSelf: "center",
  },
};

export default defaultStyles;
