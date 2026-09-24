import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  calculatorContainerTexts: {
    fontFamily: Fonts.mono,
    paddingHorizontal: 30,
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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.blue[300],
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonFont: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
    fontFamily: Fonts.mono,
    fontWeight: 300,
  },
  ThemeTextFont: {
    color: Colors.text.secondary,
    fontFamily: Fonts.mono,
    fontWeight: 300,
  },
});
