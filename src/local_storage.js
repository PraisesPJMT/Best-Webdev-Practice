export const listCatalogue = JSON.parse(localStorage.getItem('listCatalogue')) || [];
export const updateCollection = () => {
  localStorage.setItem('listCatalogue', JSON.stringify(listCatalogue));
};
export const sortTasks = () => {
  listCatalogue.sort((a, b) => a.index - b.index);
  let i = 1;
  listCatalogue.forEach((task) => {
    task.index = i;
    i += 1;
  });
  updateCollection();
};