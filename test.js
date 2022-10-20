const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHander)

function formHander(event) {
    event.preventDefault();
    console.log('Submit');

    /*Отримаємо назву задачі з інпуту */
    const taskText = todoInput.value;

    // Створюємо тег li
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    todoList.append(newTask);


    // створюємо кнопу видалення тексту
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style['margin-left'] = '30px';
    newTask.append(deleteBtn);
    console.log(newTask);

    //add delete event
    deleteBtn.addEventListener('click', function () {
        console.log(this);
        this.closest('li').remove();
    })
    //clear input
    todoInput.value = '';

    //focus on input
    todoInput.focus();
}

