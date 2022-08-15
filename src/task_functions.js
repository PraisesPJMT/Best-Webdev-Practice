import { listCatalogue, sortTasks, updateCollection } from './local_storage.js';

class Task {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = null;
  }

  createTask = (index, complete, description) => {
    listCatalogue.push({ index, complete, description });
    updateCollection();
    sortTasks();
  }

  removeTask = (item) => {
    const task = item.querySelector('input[type="text"]').value;
    const filt = listCatalogue.filter((listItem) => task === listItem.description);
    const filtTask = listCatalogue.indexOf(filt[0]);
    listCatalogue.splice(filtTask, 1);
    updateCollection();
    sortTasks();
  }
}

export default Task;