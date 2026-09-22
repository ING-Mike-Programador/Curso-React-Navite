import { useState } from "react";

export const useCount = () => {

  const [count, setCount] = useState(0);


  const increment = (value: number) => {
    setCount((current) => current + value);
  };
  const decrement = (value: number) => {
    setCount((current) => Math.max(0, current - value));
  };
  const reset = () => {
    setCount(0);
  };
  return ({
    // Propiedades
    count,
    // Metodos
    increment,
    decrement,
    reset,
  });
};
