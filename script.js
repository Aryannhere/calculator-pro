let output = document.getElementById("output");
let historyText = document.getElementById("history");
let historyList = document.getElementById("historyList");

let currentInput = "";

function append(value) {
  currentInput += value;
  output.value = currentInput;
}

function clearAll() {
  currentInput = "";
  output.value = "";
  historyText.innerText = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  output.value = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);
    
    // Show history
    historyText.innerText = currentInput;

    // Add to history list
    let li = document.createElement("li");
    li.innerText = `${currentInput} = ${result}`;
    historyList.prepend(li);

    currentInput = result.toString();
    output.value = currentInput;

  } catch {
    output.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearAll();
  }
});