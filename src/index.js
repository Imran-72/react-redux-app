import React from "react";
import ReactDOM from "react-dom";
import { compose, pipe } from "lodash/fp";

const App = () => {
  const x = 2;
  const double = (number) => number * 2;
  const square = (number) => number * number;
  const half = (number) => number / 2;
  const devide = (num2) => {
    return function (num1) {
      return num1 / num2;
    };
  };
  const mathCalculate = pipe(half, square, double, devide(3));
  // const mathCalculate = pipe(double, square, half);
  return <h1>{mathCalculate(x)}</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
