
const operator = prompt('Chose an operator (+, -, *, /):\n');

operandOne = parseFloat(prompt('Enter first Operan: '));
operandTwo = parseFloat(prompt('Enter second Operan: '));

function calculateNum(num1, num2){
	let finalResult;

	if (operator == '+'){
		finalResult = num1 + num2;
	}
	else if (operator == '-'){
		finalResult = num1 - num2;
	}
	else if (operator == '*') {
		finalResult = num1 * num2;
	}
	else{
		finalResult = num1 / num2;
	}
	return finalResult;
}

console.log(calculateNum(operandOne, operandTwo))
