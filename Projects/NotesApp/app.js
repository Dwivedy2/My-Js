// variables
const addBtn = document.getElementById('addNote');
const noteArea = document.getElementById('note-area');
const NOTES_KEY = 'notes';

// Init function
initNotes();

// Events
addBtn.addEventListener('click', addNote);

noteArea.addEventListener('click', deleteNote);

noteArea.addEventListener('click', saveNote);

// UI
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
        let localNotes = getFromLocalStorage(NOTES_KEY);
        if(localNotes) {
            let noteArr = localNotes.split(',');
            let index = noteArr.indexOf(textNote.value.trim());
            if(index != -1) {
                noteArea.removeChild(noteToRemove);
                noteArr.splice(index, 1);
                localNotes = noteArr.join(',');
                deleteFromLocal(localNotes);
            }
        }
    }
}

function saveNote(e) {
    if(e.target.className.includes('save')) {
        let note = e.target.parentNode.parentNode;
        let textNote = note.querySelector('textarea');
        
        if(textNote.value.trim()) {
            // get from local storage
            let notesFromLocal = getFromLocalStorage(NOTES_KEY);
            if(notesFromLocal) {
                notesFromLocal += ',';
            } 
            notesFromLocal += textNote.value.trim();
    
            // save
            saveToLocalStorage(NOTES_KEY, notesFromLocal);
        }
    }
}

// DB
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function deleteFromLocal(value) {
    localStorage.removeItem(NOTES_KEY);
    saveToLocalStorage(NOTES_KEY, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Init
function initNotes() {
    let localStorageData = getFromLocalStorage(NOTES_KEY);
    if(localStorageData) {
        let savedNotes = localStorageData.split(',');
        savedNotes.length && savedNotes.forEach((note) => {
            addNote(note);
        });
    }
}