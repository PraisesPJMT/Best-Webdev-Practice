const todayListBox = document.querySelector('.list');

export const resetColors = () => {
  const listItems = document.querySelectorAll('li');
  const inputs = document.querySelectorAll('input[name="tasks-item"]');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const hover = document.createTextNode('.checkbox:hover { backgroundColor: #b0b0b0 }');
  listItems.forEach((item) => {
    item.style.backgroundColor = '#fff';
  });
  inputs.forEach((input) => {
    input.style.backgroundColor = '#fff';
  });
  checkboxes.forEach((checkbox) => {
    checkbox.style = hover;
  });
};

export const resetList = () => {
  todayListBox.querySelectorAll('.func').forEach((button) => {
    button.style.display = 'block';
  });
  todayListBox.querySelectorAll('.fa-trash-can').forEach((button) => {
    button.style.display = 'none';
  });
};