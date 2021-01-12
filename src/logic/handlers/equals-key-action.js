import { calculate } from "../calculate.js";

export function equalsKeyAction(store) {
  const { 
    currentNumber,
    setCurrentNumber, 
    setResult,
    setLog,
    numbersStack,
    operatorsStack,
  } = store;

  return {
    equalsKeyHandler() {
      if (!operatorsStack.length) {
        return;
        
      } else if (!currentNumber) {
        setLog(prev => prev.concat('0')); 
        numbersStack.push(0); 
        
      } else {
        numbersStack.push(Number(currentNumber));
        setLog(prev => prev.concat(currentNumber));
      }
      
      setLog(prev => prev.concat('='));

      const res = calculate(operatorsStack, numbersStack, operatorsStack.length);
      setResult(String(res));
      setCurrentNumber(String(res));
    },

  };
}