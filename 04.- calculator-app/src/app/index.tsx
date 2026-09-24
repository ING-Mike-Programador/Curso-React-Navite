import { Colors } from "@/constants/theme";
import { View } from "react-native";
import CalulatorButton from "../../components/CalulatorButton";
import ThemeText from "../../components/ThemeText";
import { useCalculator } from "../../hooks/useCalculator";
import { globalStyles } from "../../styles/global-styles";

const CalculatorAPP = () => {
  const { formula, buildNumber, clean, toggleSig, deletLast } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.calculatorContainerTexts}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
      <View style={[globalStyles.row]}>
        <CalulatorButton
          onPress={() => {
            clean();
          }}
          label="C"
          blackText
          colorButton={Colors.blue[500]}
        />
        <CalulatorButton
          onPress={() => {
            toggleSig();
          }}
          label="+/-"
          blackText
          colorButton={Colors.blue[500]}
        />
        <CalulatorButton
          onPress={() => {
            deletLast();
          }}
          onLongPress={() => {
            clean();
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
            buildNumber("7");
          }}
          label="7"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber("8");
          }}
          label="8"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber("9");
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
            buildNumber("4");
          }}
          label="4"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber("5");
          }}
          label="5"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber("6");
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
            buildNumber("1");
          }}
          label="1"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber("2");
          }}
          label="2"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber("3");
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
            buildNumber("0");
          }}
          doubleSize={true}
          label="0"
        />
        <CalulatorButton
          onPress={() => {
            buildNumber(".");
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
