class Calculator {
    constructor(screen) {
        this.screen = screen;
        this.display = '';
    }

    appendNumber(number) {
        if (number === '.' && this.display.includes('.')) return;
        this.display += number;
        this.updateScreen();
    }

    chooseOperation(operation) {
        if (this.display === '' && operation !== '-') return;
        if (this.display !== '') this.display += ` ${operation} `;
        this.updateScreen();
    }

    compute() {
        try {
            this.display = this.display.replace(/÷/g, '/');
            this.display = eval(this.display).toString();
        } catch (e) {
            this.display = 'Error';
        }
        this.updateScreen();
    }

    clear() {
        this.display = '';
        this.updateScreen();
    }

    updateScreen() {
        this.screen.innerHTML = this.display;
    }
}

const screen = document.getElementById('screen');
const calculator = new Calculator(screen);

document.getElementById('digits').addEventListener('click', (e) => {
    const value = e.target.value;
    if (value) {
        calculator.appendNumber(value);
    }
});

document.getElementById('ops').addEventListener('click', (e) => {
    const value = e.target.value;
    if (value) {
        if (value === '=') {
            calculator.compute();
        } else if (value === 'C') {
            calculator.clear();
        } else {
            calculator.chooseOperation(value);
        }
    }
});
