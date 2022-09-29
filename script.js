'use strict';

const ToDoInput = document.querySelector("#ToDoInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const firstMsg = document.querySelector("#firstMsg");
const taskList = document.querySelector(".taskList");

addTaskBtn.addEventListener("click", addTaskBtnClick);

// функція обробник на подію click для кнопки додавання нового завдання до списку
function addTaskBtnClick() {
  if (ToDoInput.value) { // якщо текст у полі введення введено
    if (!firstMsg.hidden) firstMsg.hidden = true;

    const newTask = createTask(ToDoInput.value);
    taskList.append(newTask);
    ToDoInput.value = "";
} 
  else { // якщо поле введення для імені завдання порожнє
    alert("Value is empty. Please add task");
  }
}

// функція для створення нового завдання у списку, отримує як параметр текст завдання, повертає DOM елемент
function createTask(text) {
  const div = document.createElement("div");
  div.classList.add("task");


  const input = document.createElement("input");
  input.addEventListener("click", changeTaskState); // встановлюємо обробник на натискання по checkbox - один і той же для всіх елементів
  input.type = "checkbox";
 
  const p = document.createElement("p");
  p.innerText = text;

  div.append(input);
  div.append(p);

  return div;
}
// функція обробник, яка змінює статус вибраної задачі, використовується як обробник на подію click для checkbox
function changeTaskState() {
  if (this.checked) { // якщо натиснутий checkbox із галочкою, то додаємо для батьківського елемента клас completed
  this.parentElement.classList.add("completed");
} 
  else { // інакше прибираємо клас completed
    this.parentElement.classList.remove("completed");
  }
}

