import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "X",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    if (lastOperation.current != undefined) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    //Todo Calcular resultado
    const subResult = constResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSig = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const deletLast = () => {
    if (number.includes("-") && number.length === 2) return setNumber("0");
    if (number.length === 1) return setNumber("0");
    setNumber(number.substring(0, number.length - 1));
  };

  const setLastNumber = () => {
    //TODO Calcular resultados
    calculateResult();
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const sumOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const restOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };
  const multOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const constResult = () => {
    const [firstNum, sigOperator, secondNum] = formula.split(" ");

    const num1 = Number(firstNum);
    const num2 = Number(secondNum);

    if (isNaN(num2)) return num1;

    switch (sigOperator) {
      case Operator.add:
        return num1 + num2;
      case Operator.substract:
        return num1 - num2;
      case Operator.divide:
        return num1 / num2;
      case Operator.multiply:
        return num1 * num2;
      default:
        throw new Error(`Operacion ${sigOperator} invalida`);
    }
  };

  const calculateResult = () => {
    const result = constResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  const buildNumber = (numberString: string) => {
    // Verificar existencia del '.'

    if (number.includes(".") && numberString === ".") return;

    // Verificar inicio del numero
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }
      // Verificar si es otro 0 y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      // Evaluar si es diferente de 0, no hay punto y es el primer numero
      if (numberString != "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar 0000000000.0000000
      if (numberString === "0" && !number.includes(".")) return;
    }
    setNumber(number + numberString);
  };

  return {
    // propiedades
    formula,
    number,
    prevNumber,

    // metodos
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
  };
};
