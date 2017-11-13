const product = document.querySelector('#product');

function calculate() {
  event.preventDefault();
  const numberOne = document.querySelector('#input1').valueAsNumber;
  const numberTwo = document.querySelector('#input2').valueAsNumber;
  const operator = document.querySelector('select').value;

  switch(operator) {
    case "add":
      add(numberOne, numberTwo);
      break;
    case "subtract":
      subtract(numberOne, numberTwo);
      break;
    case "multiply":
      multiply(numberOne, numberTwo);
      break;
    case "divide":
      divide(numberOne, numberTwo);
      break;
  }
}

function add(num1, num2) {
  product.innerHTML = (num1+num2);
}

function subtract(num1, num2) {
  product.innerHTML = (num1-num2);
}

function multiply(num1, num2) {
  product.innerHTML = (num1*num2);
}

function divide(num1, num2) {
  product.innerHTML = (num1/num2);
}
