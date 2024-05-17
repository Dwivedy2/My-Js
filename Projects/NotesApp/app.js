// variables
const addBtn = document.getElementById('addNote');
const noteArea = document.getElementById('note-area');
const NOTES_KEY = 'notes';

// array to store data
const notes = [];

// Init function
initNotes();

addBtn.addEventListener('click', addNote);

noteArea.addEventListener('click', deleteNote);

noteArea.addEventListener('click', saveNote);

function addNote(note) {
    // create wrapper divs
    const noteDiv = document.createElement('div');
    const toolDiv = document.createElement('div');
    const textarea = document.createElement('textarea');

    noteDiv.className = 'note';
    toolDiv.className = 'tool';

    toolDiv.innerHTML = `
        <span class="material-symbols-outlined save">
            save
        </span>
        <span class="material-symbols-outlined delete">
            delete
        </span>
    `;

    noteDiv.appendChild(toolDiv);
    if(note && typeof note == 'string') {
        textarea.appendChild(document.createTextNode(note));
    }
    noteDiv.appendChild(textarea);
    noteArea.appendChild(noteDiv);
}

function deleteNote(e) {
    if(e.target.className.includes('delete')) {
        let noteToRemove = e.target.parentNode.parentNode;
        let textNote = noteToRemove.querySelector('textarea');
        let index = notes.indexOf(textNote.value);
        if(index != -1) {
            notes.splice(index, 1);
        }
        setTimeout(() => {
            clearLocalStorage();
        }, 1000);
        if(notes.length) {
            console.log(notes);
            setTimeout(() => {
                saveToLocalStorage(NOTES_KEY, notes);
            }, 1000);
        }
        noteArea.removeChild(noteToRemove);
    }
}

function saveNote(e) {
    if(e.target.className.includes('save')) {
        let note = e.target.parentNode.parentNode;
        let textNote = note.querySelector('textarea');
        
        // get from local storage
        let notesFromLocal = getFromLocalStorage(NOTES_KEY);
        notesFromLocal = notesFromLocal ? notesFromLocal.split(',') : [];
        
        // save
        textNote.value && notesFromLocal.push(textNote.value);
        saveToLocalStorage(NOTES_KEY, notesFromLocal);
    }
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function clearLocalStorage(key) {
    localStorage.clear();
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function initNotes() {
    let localStorageData = getFromLocalStorage(NOTES_KEY);
    if(localStorageData) {
        let savedNotes = localStorageData.split(',');
        savedNotes.length && savedNotes.forEach((note) => {
            addNote(note);
        });
    }
}