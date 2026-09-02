import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  const increment = (value: number) => {
    //setcount(count + value);
    setcount((current) => current + value);
  };
  const decrement = (value: number) => {
    //setcount(count - value);
    setcount(Math.max(0, count - value));
  };
  const reset = () => {
    setcount(0);
  }

  return (
    <>
      <h3 className="text-3xl m-5">
        Contador: <small className="font-bold">{count}</small>
      </h3>
      <div>
        <button
          className="w-20 p-2 mx-2 rounded-xl bg-blue-600 text-white"
          onClick={() => increment(1)}
        >
          +1
        </button>
        <button
          className="w-20 p-2 mx-2 rounded-xl bg-blue-600 text-white"
          onClick={() => decrement(1)}
        >
          -1
        </button>
        <button
          className="w-20 p-2 mx-2 rounded-xl bg-blue-600 text-white"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </>
  );
};
