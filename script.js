const calculator = {
	displayvalue: '0',
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null,
};
function inputDigit(digit) {
	const {displayvalue, waitingForSecondOperand} = calculator;
	if (waitingForSecondOperand === true) {
		calculator.displayvalue = digit ;
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayvalue=displayvalue=== '0' ? digit : displayvalue + digit;
	}
    }	
function inputDecimal(dot) {
	if (calculator.waitingForSecondOperand === true) {
		calculator.displayvalue = "0."
		calculator.waitingForSecondOperand = false;
return
}
if (!calculator.displayvalue.includes(dot)){
	calculator.displayvalue += dot;
}
}
function handleOperator(nextOperator) {
	const { firstOperand, displayvalue, operator} = calculator
	const inputValue = parseFloat(displayvalue);
	if (operator && calculator.waitingForSecondOperand) {
		calculator.operator = nextOperator;
		return;
	}
	if (firstOperand == null && !isNaN(inputValue)) {
		calculator.firstOperand = inputValue;
 } else if (operator){
 	const result = calculate(firstOperand, inputValue, operator);
 	calculator.displayvalue = `${parseFloat(result.toFixed(7))}`;
 	calculator.firstOperand = result ;
 }
 calculator.waitingForSecondOperand = true;
 calculator.operator = nextOperator;
}
function calculate(firstOperand, secondOperand, operator) {
	if (operator === '+') {
		return firstOperand + secondOperand;
	} else if (operator === '-') {
		return firstOperand - secondOperand;
	} else if (operator === '*') {
		return firstOperand * secondOperand;
	} else if (operator === '/') {
		return firstOperand / secondOperand;
	}
	return secondOperand;
	}
	function resetcalculator() {
		calculator.displayvalue  = '0';
		calculator.firstOperand  = null;
		calculator.waitingForSecondOperand = false;
		calculator.operator = null;
	}
	function updateDisplay() {
		const display = document.querySelector('.calculator-screen');
			display.value = calculator.displayvalue;
	}
	function fnsin() {
		const display =document.querySelector('.calculator-screen');
		sin = Math.sin(calculator.displayvalue);
		calculator.displayvalue = sin;
	}
	function fncos() {
		const display = document.querySelector('.calculator-screen');
		cos = Math.cos(calculator.displayvalue);
		calculator.displayvalue = cos;
	}
	function fntan() {
		const display = document.querySelector('.calculator-screen');
		tan = Math.tan(calculator.displayvalue);
		calculator.displayvalue = tan;
	}


	updateDisplay();
	const keys = document.querySelector('.calculator-keys');
	keys.addEventListener('click', event => {
		const {target} = event;
		const {value} = target;
		if (!target.matches('button')) {
			return;
	}
	switch (value) {
		case '+' :
		case '-' :
		case '*' :
		case '/' :
		case '=' :
	handleOperator(value);
	break;
	case '.':
	inputDecimal(value);
	break;
	case 'all-clear':
	resetcalculator();
	break;
	case 'sin':
	fnsin();
	break;
	case 'cos':
	fncos();
	break;
	case 'tan':
	fntan();
	break;
	default:
	if (Number.isInteger(parseFloat(value))) {
	inputDigit(value);
	}
	}
	updateDisplay();
});
