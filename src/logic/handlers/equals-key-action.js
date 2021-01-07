import { calculate } from "../calculate.js";

export function equalsKeyAction(store) {
  const { 
    currentNumber,
    setCurrentNumber, 
    // setCurrentResult,
    setLog,
    numbersStack,
    operatorsStack,
  } = store;

  return {
    equalsKeyHandler() {
      if (!operatorsStack.length) {
        return;
      } else if (!currentNumber) {
        operatorsStack.pop();
        setLog(prev => prev.slice(0, prev.length - 1));
      } else {
        numbersStack.push(Number(currentNumber));
        setLog(prev => prev.concat(currentNumber));
      }
      setLog(prev => prev.concat('='));

      calculate(operatorsStack, numbersStack, operatorsStack.length);

      // setCurrentResult(numbersStack[numbersStack.length - 1]);
      setCurrentNumber(String(numbersStack[numbersStack.length - 1]));
    },

  };
}