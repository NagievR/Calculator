import { operatorsManager } from "../calculate.js";

let savedNumbersStack = null;
let savedOperatorsStack = null;

export function mathOperatorsAction(store) {
  const { 
    currentNumber,
    setCurrentNumber,
    setResult,
    result, 
    setInterimResult,
    log,
    setLog,
    numbersStack,
    operatorsStack,
  } = store;

  function calcInterimResult(op) {
    const res = operatorsManager(op, operatorsStack, numbersStack);
    setInterimResult(String(res ?? ''));
  }

  function changeOperator(op) {
    const isSameOperator = op.value === log[log.length - 1];
    if (isSameOperator || !log.length) {
      return;
    }
    setLog(prev => prev.slice(0, prev.length - 1).concat(op.value));
    numbersStack.length = 0;
    operatorsStack.length = 0;

    numbersStack.push(...savedNumbersStack);
    operatorsStack.push(...savedOperatorsStack);

    calcInterimResult(op);
  }
  
  return {
    mathOperatorHandler(op) {
      if (!currentNumber) {
        changeOperator(op);
        return;
      } 
      const number = result || currentNumber;
      setLog(prev => prev.concat(number, op.value));
      numbersStack.push(Number(number));

      setResult('');
      setCurrentNumber('');
      setInterimResult('');

      savedNumbersStack = numbersStack.slice();
      savedOperatorsStack = operatorsStack.slice();
      
      calcInterimResult(op);
    }, 
 
  };
}