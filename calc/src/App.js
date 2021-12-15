import logo from './logo.svg';
import './App.css';

function App() {
  const calculator = {
    displayNumber: '0',
    firstNumber: null,
   hasSecondNumber : false,
    operator: null,
  };
  function resetCalculator() {
    calculator.displayNumber = '0';
    calculator.firstNumber = null;
    calculator.hasSecondNumber = false;
    calculator.operator = null;
  }
  

  
  function inputDecimal(dot) {
    if (calculator.hasSecondNumber === true) {
      calculator.displayNumber = "0."
      calculator.hasSecondNumber = false;
      return
    }
  
    if (!calculator.displayNumber.includes(dot)) {
      calculator.displayNumber += dot;
    }
  }

  function inputAddSub() {
      calculator.displayNumber = -calculator.displayNumber;
  }
  
  function handleOperator(nextOperator) {
    const { firstNumber: firstOperand, displayNumber: displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    
    if (operator && calculator.hasSecondNumber)  {
      calculator.operator = nextOperator;
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstNumber = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayNumber = `${parseFloat(result.toFixed(7))}`;
      calculator.firstNumber = result;
    }
  
    calculator.hasSecondNumber = true;
    calculator.operator = nextOperator;
  }
  
  function calculate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
      return firstNumber + secondNumber;
    } else if (operator === '-') {
      return firstNumber - secondNumber;
    } else if (operator === '*') {
      return firstNumber * secondNumber;
    } else if (operator === '/') {
      return firstNumber / secondNumber;
    }
  
    return secondNumber;
  }
  
  
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayNumber;
  }
  function inputNumber(number) {
    const { displayNumber: displayValue, hasSecondNumber: isSecondOperand } = calculator;
  
    if (isSecondOperand === true) {
      calculator.displayNumber = number;
      calculator.hasSecondNumber = false;
    } else {
      calculator.displayNumber = displayValue === '0' ? number : displayValue + number;
    }
  }
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case '+-':
        inputAddSub();
        break;
      case 'all-clear':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputNumber(value);
        }
    }
  
    updateDisplay();
  });
  return (
    <div className="App">
      <div class="calculator">

<input type="text" class="calculator-screen" value="" disabled />

<div class="calculator-keys">
<button type="button" class="all-clear" value="all-clear">AC</button>
<button type="button" value="+-">+/-</button>
<button type="button" value="%">%</button>
<button type="button" class="operator" value="/">&divide;</button>
<button type="button" value="7">7</button>
  <button type="button" value="8">8</button>
  <button type="button" value="9">9</button>
  <button type="button" class="operator" value="*">&times;</button>
  <button type="button" value="4">4</button>
  <button type="button" value="5">5</button>
  <button type="button" value="6">6</button>
  <button type="button" class="operator" value="-">-</button>
  <button type="button" value="1">1</button>
  <button type="button" value="2">2</button>
  <button type="button" value="3">3</button>
  <button type="button" class="operator" value="+">+</button>

  <button type="button" value="0">0</button>
  
  <button type="button" class="decimal" value=".">.</button>
  

  <button type="button" class="equal-sign operator" value="=">=</button>

</div>
</div>
    </div>
  );
}

export default App;
