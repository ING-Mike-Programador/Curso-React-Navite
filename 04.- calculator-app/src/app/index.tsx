import { Colors } from "@/constants/theme";
import { View } from "react-native";
import CalulatorButton from "../../components/CalulatorButton";
import ThemeText from "../../components/ThemeText";
import { globalStyles } from "../../styles/global-styles";

const CalculatorAPP = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.calculatorContainerTexts}>
        <ThemeText variant="h1">50 X 500000000</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
      <View style={[globalStyles.row]}>
        <CalulatorButton
          onPress={() => {
            console.log("C");
          }}
          label="C"
          blackText
          colorButton={Colors.blue[500]}
        />
        <CalulatorButton
          onPress={() => {
            console.log("+/-");
          }}
          label="+/-"
          blackText
          colorButton={Colors.blue[500]}
        />
        <CalulatorButton
          onPress={() => {
            console.log("del");
          }}
          label="del"
          blackText
          colorButton={Colors.blue[500]}
        />
        <CalulatorButton
          onPress={() => {
            console.log("÷");
          }}
          label="÷"
          colorButton={Colors.blue[700]}
          blackText={false}
        />
      </View>
      <View style={[globalStyles.row]}>
        <CalulatorButton
          onPress={() => {
            console.log("7");
          }}
          label="7"
        />
        <CalulatorButton
          onPress={() => {
            console.log("8");
          }}
          label="8"
        />
        <CalulatorButton
          onPress={() => {
            console.log("9");
          }}
          label="9"
        />
        <CalulatorButton
          onPress={() => {
            console.log("X");
          }}
          label="X"
          colorButton={Colors.blue[700]}
          blackText={false}
        />
      </View>
      <View style={[globalStyles.row]}>
        <CalulatorButton
          onPress={() => {
            console.log("4");
          }}
          label="4"
        />
        <CalulatorButton
          onPress={() => {
            console.log("5");
          }}
          label="5"
        />
        <CalulatorButton
          onPress={() => {
            console.log("6");
          }}
          label="6"
        />
        <CalulatorButton
          onPress={() => {
            console.log("-");
          }}
          label="-"
          colorButton={Colors.blue[700]}
          blackText={false}
        />
      </View>
      <View style={[globalStyles.row]}>
        <CalulatorButton
          onPress={() => {
            console.log("1");
          }}
          label="1"
        />
        <CalulatorButton
          onPress={() => {
            console.log("2");
          }}
          label="2"
        />
        <CalulatorButton
          onPress={() => {
            console.log("3");
          }}
          label="3"
        />
        <CalulatorButton
          onPress={() => {
            console.log("+");
          }}
          label="+"
          colorButton={Colors.blue[700]}
          blackText={false}
        />
      </View>
      <View style={[globalStyles.row, globalStyles.calculatorContainerTexts]}>
        <CalulatorButton
          onPress={() => {
            console.log("0");
          }}
          label="0"
        />
        <CalulatorButton
          onPress={() => {
            console.log(".");
          }}
          label="."
        />
        <CalulatorButton
          onPress={() => {
            console.log("=");
          }}
          label="="
          colorButton={Colors.blue[700]}
          blackText={false}
        />
      </View>
    </View>
  );
};

export default CalculatorAPP;
