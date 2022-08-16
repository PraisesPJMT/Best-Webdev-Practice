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
    const taskId = Number(item.id);
    const filter = listCatalogue.filter((listItem) => taskId === listItem.index);
    const filtTask = listCatalogue.indexOf(filter[0]);
    listCatalogue.splice(filtTask, 1);
    updateCollection();
    sortTasks();
  }
}

export default Task;