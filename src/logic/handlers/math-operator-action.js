import { operatorsManager } from "../calculate.js";

let savedNumbersStack = null;
let savedOperatorsStack = null;

export function mathOperatorsAction(store) {
  const { 
    currentNumber,
    setCurrentNumber, 
    setCurrentResult,
    log,
    setLog,
    numbersStack,
    operatorsStack,
  } = store;

  function calcAndAddResult(op) {
    const intermediateRes = operatorsManager(op, operatorsStack, numbersStack);
    setCurrentResult(intermediateRes ?? '');
  }

  function changeOperator(op) {
    if (op.value === log[log.length - 1] || !log.length) {
      return;
    }
    numbersStack.length = 0;
    operatorsStack.length = 0;
    numbersStack.push(...savedNumbersStack);
    operatorsStack.push(...savedOperatorsStack);
    
    setLog(prev => prev.slice(0, prev.length - 1).concat(op.value));
    calcAndAddResult(op);
  }
  
  return {
    mathOperatorHandler(op) {
      if (!currentNumber && isNaN(log[log.length - 1])) {
        changeOperator(op);
        return;
      }
      setLog(prev => prev.concat(currentNumber, op.value));
  
      numbersStack.push(Number(currentNumber));
      setCurrentNumber('');
  
      savedNumbersStack = numbersStack.slice();
      savedOperatorsStack = operatorsStack.slice();
      
      calcAndAddResult(op);
    }, 
 
  };
}