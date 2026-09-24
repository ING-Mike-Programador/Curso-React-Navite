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
    //Todo Calcular resultado

    setFormula(number);
  }, [number]);

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
  };
};
