function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue); // Using eval here for simplicity (not recommended for production due to security risks)
    document.getElementById('display').value = result;
  }
  