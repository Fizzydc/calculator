let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch (e) {
    display.value = "Error";
  }
}

//function clearDisplay() {
 // currentInput = "";
  //display.value = "";
}//
