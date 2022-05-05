//codice che presenta il problema dell'undefined
//risolto dopo con l'utilizzo degli oggetti


const form = document.getElementById('todo-cont'),
    input = document.getElementById('input'),
    todosUL = document.getElementById('todos');

//quando DOM viene caricato (refresh page) vado a chiamare la funzione allStorage
//così posso pushare tutti gli elementi del localStorage in un array
//e stamparli creando una nuova li
document.addEventListener('DOMContentLoaded', allStorage());

//quando clicco submit chiamo funzione setTodo
form.addEventListener('submit', (e) => {
    e.preventDefault();
    setTodo();
})

function setTodo() {
    //todoText = valore della variabile input form (testo inserito)
    let todoText = input.value;
    console.log(todoText);

    //todoEl = elemento li nella pagina
    let todoEl = document.createElement('li');
    itemN = Object.keys(localStorage).length + 1; //numero todos
    todoEl.id = 'todo' + itemN; //id todo -> es. todo 3
    todoEl.innerText = todoText; //mofico con testo inserito nel form
    console.log(todoEl);
    todosUL.appendChild(todoEl);
    input.value = ''; //azzero campo inserimento

    localStorage.setItem(todoEl.id, todoText); //setto un elemento nel localStorage

    //Funzione per eliminare cliccando elemento (anche nel localStorage)
    todoEl.addEventListener('click', (e) => {
        todoEl.remove();
        localStorage.removeItem(todoEl.id);
    });
}

//chiamata quando refresho pagina
function allStorage() {
    console.log('allStorage');
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    //stampo todo sulla pagina chiamando viewTodo
    for (i = 0; i <= keys.length; i++) {
        viewTodo(keys[i], values[i])
    }
}

//visualizzo todo sulla pagina sottoforma di li
function viewTodo(key, value) {
    console.log('viewTodo');
    let todoEl = document.createElement('li');
    todoEl.id = key;
    todoEl.innerText = value;
    todosUL.appendChild(todoEl);

    todoEl.addEventListener('click', (e) => {
        todoEl.remove();
        localStorage.removeItem(todoEl.id);
    });
}