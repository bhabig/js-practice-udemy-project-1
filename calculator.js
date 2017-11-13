// select div to display product upon calculation
const product = document.querySelector('#product');

function calculate() {
  // prevent page from reloading upon form submit
  event.preventDefault();
  // select value (as num) entered in first input
  const numberOne = document.querySelector('#input1').valueAsNumber;
  // select value (as num) entered in second input
  const numberTwo = document.querySelector('#input2').valueAsNumber;
  // select operator type selected from dropdown list
  const operator = document.querySelector('select').value;

  // fire correct function based on operator selection
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

// fire one of below functions based on operator selection
// use .innerHTML to only display 1 product at a time
function add(num1, num2) {
  product.innerHTML = "THE ANSWER IS: " + (num1 + num2);
  product.setAttribute('id', "answer");
}

function subtract(num1, num2) {
  product.innerHTML = "THE ANSWER IS: " + (num1 - num2);
  product.setAttribute('id', "answer");
}

function multiply(num1, num2) {
  product.innerHTML = "THE ANSWER IS: " + (num1 * num2);
  product.setAttribute('id', "answer");
}

function divide(num1, num2) {
  product.innerHTML = "THE ANSWER IS: " + (num1 / num2);
  product.setAttribute('id', "answer");
}
