// global
let display = '';
let result = 0;

// doms
const digits = document.getElementById('digits');
const ops = document.getElementById('ops');
const screen = document.getElementById('screen');

// event listeners
digits.addEventListener('click', (e) => {
    let digit = e.target.value;
    if(digit) {
        display += digit;
        updateScreen(display);
    }
});

ops.addEventListener('click', (e) => {
    let op = e.target.value;
    if(op && op != '=') {
        display += op;
        updateScreen(display);
    } else if (op == '=') {
        updateScreen(eval(display));
        display = '';
    }
});

function updateScreen(value) {
    screen.innerHTML = value;
}