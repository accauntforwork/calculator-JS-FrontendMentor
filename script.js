document.addEventListener("DOMContentLoaded", function () {
  let display = document.querySelector(".display");
  let currentInput = "";

  document.querySelectorAll(".number").forEach(function (button) {
    button.addEventListener("click", function () {
      appendNumber(button.textContent);
    });
  });

  document.querySelectorAll(".operator").forEach(function (button) {
    button.addEventListener("click", function () {
      setOperation(button.textContent.trim());
    });
  });

  document.querySelector(".decimal").addEventListener("click", function () {
    appendDecimal();
  });

  document.querySelector(".delete").addEventListener("click", function () {
    deleteLastDigit();
  });

  document.querySelector(".reset").addEventListener("click", function () {
    resetCalculator();
  });

  document.querySelector(".equal").addEventListener("click", function () {
    calculateResult();
  });

  function appendNumber(number) {
    currentInput += number;
    updateDisplay();
  }

  function setOperation(operation) {
    if (currentInput !== "") {
      currentInput += ` ${operation} `;
      updateDisplay();
    }
  }

  function appendDecimal() {
    if (!currentInput.includes(".")) {
      currentInput += ".";
      updateDisplay();
    }
  }

  function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }

  function resetCalculator() {
    currentInput = "";
    updateDisplay();
  }

  function calculateResult() {
    try {
      let result = eval(currentInput);
      currentInput = result.toString();
      updateDisplay();
    } catch (error) {
      currentInput = "Error";
      updateDisplay();
    }
  }

  function updateDisplay() {
    display.textContent = currentInput || "0";
  }
});
