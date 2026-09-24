import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    fontFamily: Fonts.mono,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 25,
    paddingBottom: 50,
  },
  mainResult: {
    color: Colors.text.secondary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: 400,
  },
  subResult: {
    color: Colors.text.inverse,
    fontSize: 40,
    textAlign: "right",
    fontWeight: 300,
  },
});
