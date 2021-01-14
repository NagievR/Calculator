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

  return intermediateResult;
};

export function calculate(operators, numbers, iterations = 1) {
  while (iterations) {
    const [b, a] = [numbers.pop(), numbers.pop()];
    const op = operators.pop();
    const sum = op.doOperation(a, b);
    numbers.push(sum);
    iterations--;
  }
  return numbers[numbers.length - 1];
} 