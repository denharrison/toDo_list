// Добавление задачи 

let tasksList = document.querySelector("#tasksList");
let taskInput = document.querySelector('#taskInput');
let valueInput = ''

taskInput.addEventListener('input', (event) => { valueInput = event.target.value })

let addTaskBtn = document.querySelector('#addTaskBtn');

addTaskBtn.addEventListener('click', (event) => {

    let newTask = document.createElement('li')
    let newTaskInput = document.createElement('input')
    let newTaskSpan = document.createElement('span')
    let taskActions = document.createElement('div')
    let editBtn = document.createElement('button')

    newTask.classList.add("task-item");

    newTaskInput.classList.add("task-checkbox");
    newTaskInput.setAttribute('type', 'checkbox')

    newTaskSpan.classList.add('task-text')
    newTaskSpan.textContent = valueInput

    taskActions.classList.add("task-actions");

    editBtn.classList.add("task-action-btn");
    editBtn.classList.add("delete-btn");
    editBtn.setAttribute('title', 'Редактировать')

    newTask.append(newTaskInput)
    newTask.append(newTaskSpan);
    newTask.append(taskActions)
    tasksList.append(newTask)

    valueInput = ''
    taskInput.value = ''

})
