const enter = document.getElementById("numConfirm");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const calculate = document.getElementById("calculate");
const input = document.getElementById("numEntry");
let result = document.getElementById("result");

document.addEventListener('DOMContentLoaded', function() {
    let total = 0;
    let values = [];
    let operators = [1]; //1=add, 2=subtract, 3=multiply, 4=divide
    let increment = "Equation: ";

    enter.addEventListener('click', function(){
        if (!isNaN(input.value) && values.length == operators.length - 1 && input.value != "") {
            values.push(input.value);
            increment += input.value;
            result.innerText = increment;
        }
    });

    plus.addEventListener('click', function() {
        if (values.length == operators.length) {
            operators.push(1);
            increment += " + ";
            result.innerText = increment;
        }
    });

    minus.addEventListener('click', function() {
        if (values.length == operators.length) {
            operators.push(2);
            increment += " - ";
            result.innerText = increment;
        }
    });

    multiply.addEventListener('click', function() {
        if (values.length == operators.length) {
            operators.push(3);
            increment += " × ";
            result.innerText = increment;
        }
    });

    divide.addEventListener('click', function() {
        if (values.length == operators.length) {
            operators.push(4);
            increment += " ÷ ";
            result.innerText = increment;
        }
    });

    calculate.addEventListener('click', function() {
        for (let i in values) {
            switch (operators[i]) {
                case 1:
                    total += +values[i];
                    break;
                case 2:
                    total -= +values[i];
                    break;
                case 3:
                    total = +total * +values[i];
                    break;
                case 4:
                    total = +total / +values[i];
                    break;
            }
        }
        result.innerText = "Your result: " + total;
        increment = "Equation: ";
        values = [];
        operators = [1];
    })
});