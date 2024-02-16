/*

 _____                         ______                 ___   ____ 
|  __ \                        |  _  \               /   | / ___|
| |  \/  __ _  _ __ ___    ___ | | | |  ___ __   __ / /| |/ /___ 
| | __  / _` || '_ ` _ \  / _ \| | | | / _ \\ \ / // /_| || ___ \
| |_\ \| (_| || | | | | ||  __/| |/ / |  __/ \ V / \___  || \_/ |
 \____/ \__,_||_| |_| |_| \___||___/   \___|  \_/      |_/\_____/


*/

/* 
	AUTHOR: GameDev46

	replit: https://replit.com/@GameDev46
	youtube: https://www.youtube.com/@gamedev46
	twitter: https://twitter.com/GameDev46

	Give clear and visible credit if using! (much appreciated 😄)

 	PLEASE DO NOT REMOVE THESE CREDITS!
*/

// Get all the needed elements

const previousOperand = document.getElementById('prev-operand');
const currentOperand = document.getElementById('cur-operand');

// Create all the needed variables

var currentNumber = "";

// Create functions for all the different methods

function addNumberToData(number) {
  currentNumber = currentNumber + number;

  previousOperand.innerHTML = currentNumber;
}

function deleteAllData() {
  currentNumber = "";

  previousOperand.innerHTML = "0";
  currentOperand.innerHTML = "";
}

function removeLastNumber() {
  
  var data = currentNumber.substring(currentNumber.length, currentNumber.length - 1);

  currentNumber = currentNumber.substring(0, currentNumber.length - 1);

  if (data == " ") {
    currentNumber = currentNumber.substring(0, currentNumber.length - 2);
  }

  previousOperand.innerHTML = currentNumber;
}

function addOperatorToData(operator) {
  currentNumber = currentNumber + " " + operator + " ";

  previousOperand.innerHTML = currentNumber;
}

function validateAnswerAndDisplay() {

var outputNumber = 0;
var recordedData = "";

var currentDataOnScreen = previousOperand.innerHTML;

var allMathNumbers = [];
var allMathOperaters = [];

  for (var i = 0; i < currentDataOnScreen.length; i++) {
    var item = currentDataOnScreen.substring(i, i + 1);

    recordedData = recordedData + item;

    if (item == " ") {
      allMathNumbers.push(recordedData.substring(0, recordedData.length - 1));

      allMathOperaters.push(currentDataOnScreen.substring(i + 1, i + 2));

      recordedData = "";

      i += 2;
    }
  }

  allMathNumbers.push(recordedData);

  // Get all the data from the created arrays to work out the final result

  outputNumber = Number(allMathNumbers[0]);

  for (var i = 0; i < allMathOperaters.length; i++) {
    var item = allMathNumbers[i + 1];
    var currentOperator = allMathOperaters[i];

    if (currentOperator == "+") {
      outputNumber += Number(item);
      console.log(outputNumber);
    }
    else if (currentOperator == "-") {
      outputNumber -= Number(item);
      console.log(outputNumber);
    }
    else if (currentOperator == "x") {
      outputNumber *= Number(item);
      console.log(outputNumber);
    }
    else if (currentOperator == "÷") {
      outputNumber /= Number(item);
      console.log(outputNumber);
    }

  }

  currentOperand.innerHTML = outputNumber;
}
