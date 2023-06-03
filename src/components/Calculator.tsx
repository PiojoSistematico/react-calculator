import { useState } from "react";
import ButtonGrid from "./ButtonGrid";
import Display from "./Display";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [formula, setFormula] = useState("");
  /* const [squares, setSquares] = useState(Array(9).fill(null)); */

  /* handle the click on a square */
  function handleClick(index: string): void {
    /* if the square has a X or O do nothing */
    /* if (squares[index]) return; */

    /* create a copy of squares to modify the new move */
    /* let newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares); */

    /* if the current move is a  */
    /* if (calculateWinner(newSquares)) return;
    setIsXNext(!isXNext); */
    console.log(index);
    setValue((v) => v + index);
    setFormula((f) => f + " " + index);
  }

  /* refresh page for a new game */
  /* function refreshPage() {
    window.location.reload();
  } */

  return (
    <main>
      <Display formula={formula} value={value}></Display>
      <ButtonGrid handleClick={handleClick}></ButtonGrid>
    </main>
  );
};

export default Calculator;
