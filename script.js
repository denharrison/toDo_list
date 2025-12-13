let tasksList = document.querySelector("#tasksList");
let taskInput = document.querySelector("#taskInput");
let totalTasks = document.querySelector("#totalTasks");
let pendingTasks = document.querySelector("#pendingTasks");
let completedTasks = document.querySelector("#completedTasks");
let valueInput = "";

// Счетчики 
let countTotalTasks = 1;
let pendingTasksCount = 1;
let completedTasksCount = 0;

// Обновляем счетчики 
totalTasks.textContent = countTotalTasks;
pendingTasks.textContent = pendingTasksCount;
completedTasks.textContent = completedTasksCount;

taskInput.addEventListener("input", (event) => {
  valueInput = event.target.value;
});

let addTaskBtn = document.querySelector("#addTaskBtn");

// Добавление задач 

addTaskBtn.addEventListener("click", (event) => {

  if (valueInput.trim() === "") { // проверяем на пустоту => trim учитывает пробелы
    return;
  }

  let newTask = document.createElement("li");
  let newTaskInput = document.createElement("input");
  let newTaskSpan = document.createElement("span");
  let taskActions = document.createElement("div");
  let editTaskIcon = document.createElement("img");
  let deleteTaskIcon = document.createElement("img");

  newTask.classList.add("task-item");
  newTaskInput.classList.add("task-checkbox");
  newTaskInput.setAttribute("type", "checkbox");

  // Обработчик чекбокса
  newTaskInput.addEventListener("change", function () {
    if (this.checked) {
      // Галочку поставили: задача выполнена
      completedTasks.textContent = ++completedTasksCount;
      pendingTasks.textContent = --pendingTasksCount;
    } else {
      // Галочку убрали: задача снова невыполнена
      completedTasks.textContent = --completedTasksCount;
      pendingTasks.textContent = ++pendingTasksCount;
    }
  });

  newTaskSpan.classList.add("task-text");
  newTaskSpan.textContent = valueInput;

  taskActions.classList.add("task-actions");
  editTaskIcon.classList.add("task-action-img");
  editTaskIcon.classList.add("edit-btn");
  editTaskIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3597/3597075.png"
  );

  deleteTaskIcon.classList.add("task-action-img");
  deleteTaskIcon.classList.add("delete-btn");
  deleteTaskIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
  );

  //  Обработчик удаления задачи
  deleteTaskIcon.addEventListener("click", function () {

    if (newTaskInput.checked) { // если нажата галочка
      completedTasks.textContent = --completedTasksCount;
    } else { // если не нажата галочка
      pendingTasks.textContent = --pendingTasksCount;
    }

    totalTasks.textContent = --countTotalTasks;

    // Удаляем задачу из DOM
    newTask.remove();
  });

  // Добавление элементов в DOM
  newTask.append(newTaskInput);
  newTask.append(newTaskSpan);
  newTask.append(taskActions);
  taskActions.append(editTaskIcon);
  taskActions.append(deleteTaskIcon);
  tasksList.append(newTask);

  // Сбрасываем поле ввода
  valueInput = "";
  taskInput.value = "";

// Обновляем счетчики
  totalTasks.textContent = ++countTotalTasks; // +1 к общему количеству
  pendingTasks.textContent = ++pendingTasksCount; // +1 к невыполненным 

});

let tasksArray = document.getElementsByClassName('task-item') // живая коллекция задач

let btnActive = document.querySelector('[data-filter="pending"]'); // кнопка активные 
let btnComplete = document.querySelector('[data-filter="completed"]'); // кнопка завершенные 
