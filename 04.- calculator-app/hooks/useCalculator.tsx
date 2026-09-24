import { useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "X",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(Operator.add);

  const buildNumber = (numberString: string) => {
    console.log({ numberString });
  };

  return {
    // propiedades
    formula,
    number,
    prevNumber,

    // metodos
    buildNumber,
  };
};
