import { useState } from "react";
import ButtonGrid from "./ButtonGrid";
import Display from "./Display";
import calculate from "../helpers/calculate";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [formula, setFormula] = useState("");
  const [operation, setOperation] = useState("");

  const conditions: string[] = ["+", "-", "x", "÷"];

  /* handle the click on a square */
  function handleClick(str: string): void {
    switch (str) {
      case "CE":
        setOperation("");
        setValue("");
        setFormula("");
        break;
      case "C":
        setValue("");
        break;
      case "<":
        setValue((v) => v.slice(0, -1));
        break;
      case "=":
        if (formula.slice(-1) == "=") break;
        setValue(calculate(formula + value, operation));
        setOperation(str);
        setFormula((v) => v + value + str);
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        setOperation(str);
        if (conditions.some((op) => formula.slice(-1) == op)) {
          setFormula((v) => v.slice(0, -1) + str);
        } else {
          setFormula(value + str);
          setValue("");
        }
        break;
      case "%":
        setOperation(str);
        setValue(calculate(value, "%"));
        break;
      default:
        setValue((v) => v + str);
        break;
    }
  }

  return (
    <main>
      <Display formula={formula} value={value} operation={operation}></Display>
      <ButtonGrid handleClick={handleClick}></ButtonGrid>
    </main>
  );
};

export default Calculator;
