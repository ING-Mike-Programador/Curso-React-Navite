import { Colors } from "@/constants/theme";
import { View } from "react-native";
import CalulatorButton from "../../components/CalulatorButton";
import ThemeText from "../../components/ThemeText";
import { useCalculator } from "../../hooks/useCalculator";
import { globalStyles } from "../../styles/global-styles";

const CalculatorAPP = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSig,
    deletLast,
    divideOperation,
    sumOperation,
    restOperation,
    multOperation,
    constResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.calculatorContainerTexts}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
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
          onPress={divideOperation}
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
          onPress={multOperation}
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
          onPress={restOperation}
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
            sumOperation();
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
          onPress={calculateResult}
          label="="
          colorButton={Colors.blue[700]}
          blackText={false}
        />
      </View>
    </View>
  );
};

export default CalculatorAPP;
