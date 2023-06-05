export default function calculate(formula: string, operation: string): string {
  const index: number = formula.indexOf(operation);
  const str1: string = formula.slice(0, index);
  const str2: string = formula.slice(index + 1);
  let answer: number;
  switch (operation) {
    case "+":
      answer = Number(str1) + Number(str2);
      break;
    case "-":
      answer = Number(str1) - Number(str2);
      break;
    case "x":
      answer = Number(str1) * Number(str2);
      break;
    case "÷":
      answer = Number(str1) / Number(str2);
      break;
  }
  return answer.toString();
}
