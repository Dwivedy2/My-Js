// constants
const DIV = 'div';
const BUTTON = 'button';
const NEXT = 'Next';
const DELETE = 'Delete';

// global variables
let todoItemText = null;

// document variables
const add = document.getElementById('add');
const todoItem = document.getElementById('todo-item');
const todoItems = document.getElementById('todo-items');
const progressItems = document.getElementById('progress-items');
const doneItems = document.getElementById('done-items');

// event listeners
todoItem.addEventListener('keyup', function(event) {
    todoItemText = event.target.value;
});

add.addEventListener('click', addTodoItems);

// utility functions


// helper functions
function addTodoItems() {
    if(todoItemText) {
        // outer div
        const outerDiv = document.createElement(DIV);
        outerDiv.className = "content d-flex";

        const contDiv =  document.createElement(DIV);
        const node = document.createTextNode(todoItemText);
        contDiv.appendChild(node);

        const btnDiv = document.createElement(DIV);
        btnDiv.className = 'buttons d-flex';
        const nextBtn = document.createElement(BUTTON);
        const delBtn = document.createElement(BUTTON);

        nextBtn.className = 'next';
        nextBtn.appendChild(document.createTextNode(NEXT));
        nextBtn.addEventListener('click', () => moveToInProgress(outerDiv));
        delBtn.className = 'del';
        delBtn.appendChild(document.createTextNode(DELETE));
        delBtn.addEventListener('click', () => deleteItem(outerDiv));

        btnDiv.appendChild(nextBtn);
        btnDiv.appendChild(delBtn);
        
        outerDiv.appendChild(contDiv);
        outerDiv.appendChild(btnDiv);

        todoItems.appendChild(outerDiv);
    }
}

function deleteItem(itemToDelete) {
    todoItems.removeChild(itemToDelete);
}

function moveToInProgress(itemToMove) {
    progressItems.appendChild(itemToMove);
    console.log('progrss func  ')
    const currNextBtn = itemToMove.children[1].children[0];
    const currDelBtn = itemToMove.children[1].children[1];

    currNextBtn.replaceWith(currNextBtn.cloneNode(true));
    currDelBtn.replaceWith(currDelBtn.cloneNode(true));

    const newCurrNextBtn = itemToMove.children[1].children[0];
    newCurrNextBtn.className = 'prev';
    newCurrNextBtn.innerHTML = 'Prev';
    newCurrNextBtn.addEventListener('click', () => moveToTodo(itemToMove));
    
    const newcurrDelBtn = itemToMove.children[1].children[1];
    newcurrDelBtn.className = 'next';
    newcurrDelBtn.innerHTML = 'Next';
    newcurrDelBtn.addEventListener('click', () => moveToDone(itemToMove));
}

function moveToTodo(itemToMove) {
    console.log('todo func  ');
    todoItems.appendChild(itemToMove);

    const currPrevBtn = itemToMove.children[1].children[0];
    const currNextBtn = itemToMove.children[1].children[1];

    // to remove any event listeners
    currPrevBtn.replaceWith(currPrevBtn.cloneNode(true));
    currNextBtn.replaceWith(currNextBtn.cloneNode(true));

    const newCurrPrevBtn = itemToMove.children[1].children[0];
    newCurrPrevBtn.className = 'next';
    newCurrPrevBtn.innerHTML = 'Next';
    newCurrPrevBtn.addEventListener('click', () => moveToInProgress(itemToMove));
    
    const newcurrDelBtn = itemToMove.children[1].children[1];
    newcurrDelBtn.className = 'del';
    newcurrDelBtn.innerHTML = 'Delete';
    newcurrDelBtn.addEventListener('click', () => deleteItem(itemToMove));
}

function moveToDone(itemtoMove) {
    console.log('done func ');
    itemtoMove.removeChild(itemtoMove.children[1]);
    doneItems.appendChild(itemtoMove);
}