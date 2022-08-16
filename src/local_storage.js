export const listCatalogue = JSON.parse(localStorage.getItem('listCatalogue')) || [];
export const updateCollection = () => {
  localStorage.setItem('listCatalogue', JSON.stringify(listCatalogue));
};
export const sortTasks = () => {
  listCatalogue.forEach((task, index) => {
    task.index = index + 1;
  });
  updateCollection();
};