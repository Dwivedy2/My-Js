// constants
const INCOME_DB = 'income_db';
const EXPENSE_DB = 'expense_db';
const BALANCE_DB = 'balance_db';
const TRANSACTION_DATA_DB = 'transaction_data_db';

// globals
let alertTimeOutId = null;

// document variables
const containerDisplay = document.getElementById('containerDisplay');
const addTransactionBtn = document.getElementById('addTransactionBtn');
const containerForm = document.getElementById('containerForm');
const crossBtn = document.getElementById('crossBtn');
const addIncomeBtn = document.getElementById('addIncomeBtn');
const totalBalance = document.getElementById('totalBalance');
const incomeInp = document.getElementById('incomeInp');
const alertBox = document.getElementById('alertBox');
const alertText = document.getElementById('alertText');
const alertCrossBtn = document.getElementById('alertCrossBtn');
const incomeBox = document.getElementById('incomeBox');
const expenseBox = document.getElementById('expenseBox');
const transactionSubmit = document.getElementById('transactionSubmit');
const amountBox = document.getElementById('amount');
const dateBox = document.getElementById('date');
const categoryBox = document.getElementById('category');
const transactionBody = document.getElementById('transactionBody');
const radioInc = document.getElementById('radioInc');
const radioExp = document.getElementById('radioExp');


// event listeners
window.addEventListener('load', loadPage);
addTransactionBtn.addEventListener('click', loadForm);
crossBtn.addEventListener('click', closeForm);
addIncomeBtn.addEventListener('click', addIncome);
alertCrossBtn.addEventListener('click', closeAlertBox);
transactionSubmit.addEventListener('click', submitTransaction);
categoryBox.addEventListener('change', handleTransactionType);
radioExp.addEventListener('click', handleCategory);
radioInc.addEventListener('click', handleCategory);

// functions
function loadPage() {
    const transactionList = JSON.parse(getFromDb(TRANSACTION_DATA_DB)) ?? [];
    if(transactionList.length) {
        transactionList.map((transaction) => {
            const tr = createElementTr(transaction);
            transactionBody.appendChild(tr);
        });
    }

    let expense = calculateTotal(transactionList, '0');
    let incomeTotal = calculateTotal(transactionList, '1');

    loadExpense(incomeTotal, expense);
}

function loadExpense(income, expense) {
    if(!isNaN(expense) && (income > expense)) {
        let balance = income - expense;
        expenseBox.innerHTML = getFormatedCurrency(expense > 0 ? expense : 0);
        totalBalance.innerHTML = getFormatedCurrency(balance > 0 ? balance : 0);
        incomeBox.innerHTML = getFormatedCurrency(income > 0 ? income : 0);
    } else {
        showAlertDanger("Either expense is not in correct format or income is less than expense");
    }
}

function loadForm() {
    containerDisplay.className = `blur ${containerDisplay.className}`;
    containerForm.className = containerForm.className.replace('d-none', 'd-block');
}

function closeForm() {
    containerDisplay.className = containerDisplay.className.replace('blur', '');
    containerForm.className = containerForm.className.replace('d-block', 'd-none');
}

function addIncome() {
    let income = Number(incomeInp.value);
    incomeInp.value = '';
    
    if(income == 0) {
        showAlertDanger('Income must be greater than 0');
    } else if(isNaN(income)) {
        showAlertDanger('Income must be a valid number');
    } else {
        addTransactionInDb({
            "category": "2",
            "amount": income,
            "type": "1",
            "date": Date.now(),
        });
    }
}

function submitTransaction(event) {
    // event.preventDefault();

    const transactionData = {};

    const amtVal = Number(amountBox.value);

    if(!isNaN(amtVal) || (amtVal > 0)) {
        transactionData.amount = amtVal;
        transactionData.date = dateBox.value;
        transactionData.category = categoryBox.value;
        transactionData.type = document.querySelector('input[name="transactionType"]:checked').value;
    
        addTransactionInDb(transactionData);
    
        loadPage();
    }
}

function addTransactionInDb(transactionData) {
    const transactionList = JSON.parse(getFromDb(TRANSACTION_DATA_DB)) ?? [];
        
    transactionList.push(transactionData);
    saveInDb(TRANSACTION_DATA_DB, JSON.stringify(transactionList));

    if(transactionData.type === "1") {
        processIncome(amtVal);
    }
}

function createElementTr(transaction) {
    const tr = document.createElement('tr');
    const categoryTd = document.createElement('td');
    const amountTd = document.createElement('td');
    const typeTd = document.createElement('td');
    const dateTd = document.createElement('td');

    categoryTd.innerHTML = Category[transaction.category];
    amountTd.innerHTML = `₹ ${getFormatedCurrency(transaction.amount)}`;
    typeTd.innerHTML = TransactionType[transaction.type];
    let dt = new Date(transaction.date);
    dateTd.innerHTML = `${dt.getDate()} ${Month[dt.getMonth()]}`
    

    tr.appendChild(categoryTd);
    tr.appendChild(amountTd);
    tr.appendChild(typeTd);
    tr.appendChild(dateTd);

    return tr;
}

function handleTransactionType() {
    if(categoryBox.value == "2") {
        radioInc.checked = true;
    } else {
        radioExp.checked = true;
    }
}

function handleCategory(event) {
    if(event.target.value == "1") {
        categoryBox.value = "2";
    } else {
        categoryBox.value = "0";
    }
}

function calculateTotal(transactionList, tranType) {
    let expense = 0;

    if(transactionList.length) {
        expense = transactionList
            .filter(({type}) => type === tranType)
            .reduce((acc, {amount}) => acc + Number(amount), 0);           
    }

    return expense;
}

// utility functions

function processIncome(income) {
    let currIncome = Number(getFromDb(INCOME_DB));
    income += currIncome;
    saveInDb(INCOME_DB, income);
    incomeBox.innerHTML = getFormatedCurrency(income);
}

function showAlertDanger(msg) {
    alertBox.className = `bg-danger ${alertBox.className.replace('d-none', '')}`
    alertText.innerHTML = msg;
    alertTimeOutId = setTimeout(() => {
        alertBox.className = alertBox.className.replace('bg-danger', '');
        alertBox.className = `d-none ${alertBox.className}`
    }, 3000);
}

function closeAlertBox() {
    clearTimeout(alertTimeOutId);
    alertBox.className = `d-none ${alertBox.className}`;
    alertTimeOutId = null;
}

function getFormatedCurrency(income) {
    return new Intl.NumberFormat("en-IN").format(income);
}

function getOriginalCurrency(income) {
    return Number(income.replaceAll(',', ''));
}

function saveInDb(key, value) {
    localStorage.setItem(key, value);
}

function getFromDb(key) {
    return localStorage.getItem(key);
}