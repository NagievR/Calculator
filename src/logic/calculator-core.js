export function operatorsManager(currOp, operators, numbers) {
  if (!operators.length) {
    operators.push(currOp);
    return;
  }
  
  let intermediateResult = null;

  const prevOp = operators[operators.length - 1];
  if (prevOp.priority < currOp.priority) {
    operators.push(currOp);
  } else {
    intermediateResult = calculate(operators, numbers);
    operators.push(currOp);
  }

  if (operators[1] && (operators[0].priority === operators[1].priority)) {
    const lastOpSaved = operators.pop();
    intermediateResult = calculate(operators, numbers);
    operators.push(lastOpSaved);
  }

  return setToFixed(intermediateResult);
};

export function calculate(operators, numbers, iterations = 1) {
  while (iterations) {
    const [b, a] = [numbers.pop(), numbers.pop()];
    const op = operators.pop();
    const sum = op.doOperation(a, b);
    numbers.push(sum);
    iterations--;
  }
  return setToFixed(numbers[numbers.length - 1]);
} 

function setToFixed(num, maxFloatLength = 6) {
  if (Number.isInteger(num) || num === null || String(num).includes('e')) {
    return num;
  }
  let fixed = Number(num).toFixed(maxFloatLength);
  console.log(num);

  // remove all '0's from the end 
  for (let i = fixed.length-1; i > 2; i--) {
    if (fixed[i] !== '0') {
      break;
    }
    fixed = fixed.slice(0, i);
  }

  return fixed;
}