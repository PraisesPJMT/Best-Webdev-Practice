import { listCatalogue, sortTasks } from './local_storage.js';
import { checkedFormat } from './complete_functions.js';

const todayListBox = document.querySelector('.list');
const renderCatalogue = () => {
  sortTasks();
  listCatalogue.forEach((item) => {
    todayListBox.innerHTML += `<li class="list-item" id="${item.index}">
                    <div class="task-display">
                        <input type="checkbox" name="tasks" class="checkbox">
                        <input type="text" name="tasks-item" value="${item.description}" class="task-item" readonly>
                    </div>
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid func fa-ellipsis-vertical"></i>
                </li>`;
  });
  const list = document.querySelectorAll('.list-item');
  list.forEach((listItem) => {
    const task = listItem.querySelector('.task-item').value;
    listCatalogue.forEach((item) => {
      if (item.description === task && item.complete === true) {
        listItem.querySelector('.checkbox').checked = true;
        const locTask = listItem.querySelector('.task-item');
        checkedFormat(listItem, locTask);
      }
    });
  });
};

export default renderCatalogue;