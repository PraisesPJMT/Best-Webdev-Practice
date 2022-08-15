import { sortTasks } from './local_storage.js';
import { resetList, resetColors } from './reset_functions.js';
import {
  todayList, taskFunction, addToDoItem, clearTasks,
} from './list_functions.js';
import renderCatalogue from './task_render.js';
import { checkFunction } from './complete_functions.js';
import './style.css';

const todayListBox = document.querySelector('.list');
const addList = document.querySelector('.fa-check-to-slot');
const listInput = document.querySelector('input[name="task-input"]');
const taskInput = document.querySelectorAll('input');
const appBox = document.querySelector('.app-container');

sortTasks();

addList.addEventListener('click', () => {
  const toDo = listInput.value;
  if (toDo.length > 0) {
    addToDoItem(toDo);
  }
});

listInput.addEventListener('keypress', (event) => {
  resetColors();
  if (event.key === 'Enter') {
    const toDo = listInput.value;
    if (toDo.length > 0) {
      addToDoItem(toDo);
    }
  }
});

listInput.addEventListener('click', () => {
  resetList();
  resetColors();
});

taskInput.forEach((input) => {
  input.addEventListener('click', () => {
    resetList();
    resetColors();
  });
});

todayListBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('func') || event.target.classList.contains('task-item')) {
    const item = event.target.parentElement;
    resetList();
    resetColors();
    taskFunction(item);
  } else if (event.target.classList.contains('fa-trash-can')) {
    const item = event.target.parentElement;
    todayList.removeTask(item);
    todayListBox.removeChild(item);
  } else if (event.target.classList.contains('checkbox')) {
    const item = event.target.parentElement.parentElement;
    const checkbox = event.target;
    checkFunction(item, checkbox);
  }
});

appBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('clear')) {
    const checkboxes = appBox.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const item = checkbox.parentElement.parentElement;
        clearTasks(item);
        todayListBox.removeChild(item);
      }
    });
  }
});

renderCatalogue();