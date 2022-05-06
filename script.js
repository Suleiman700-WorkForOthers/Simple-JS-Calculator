const display = document.querySelector('#display');
const clearBtn = document.getElementById('clear')
const backSpace = document.getElementById('backspace')
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const equalBtn = document.getElementById('equal')

// Clear
clearBtn.addEventListener('click', () => {
    display.innerText = '';
})

// Backspace
backSpace.addEventListener('click', () => {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
})

// Numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        display.innerText += this.id;
    }
}

// Operators
for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = function () {
        display.innerText += this.id;
    }
}

// Equal
equalBtn.addEventListener('click', () => {
    const data = display.innerText

    // If no data
    if (data === '') {
        display.innerText = 'Empty!';
        setTimeout(() => (display.innerText = ''), 500);
    } else {
        // Try to solve
        try {
            display.innerText = eval(data)
        }
        // Catch error
        catch (e) {
            if (e instanceof SyntaxError) {
                display.innerText = 'Syntax Error!'
                setTimeout(() => (display.innerText = ''), 1000);
            }
        }
    }
})
