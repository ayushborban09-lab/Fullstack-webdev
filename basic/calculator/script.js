const display = document.getElementById("input");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        expression += button.textContent;
        display.value = expression;
    });
});

clearBtn.addEventListener("click", () => {
    expression = "";
    display.value = "";
});

equalBtn.addEventListener("click", () => {
    try {
        const result = Function('"use strict"; return (' + expression + ')')();
        display.value = result;
        expression = result.toString();
    } catch {
        display.value = "Error";
        expression = "";
    }
});