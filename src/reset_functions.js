const todayListBox = document.querySelector('.list');

export const resetColors = () => {
  const listItems = document.querySelectorAll('li');
  const inputs = document.querySelectorAll('input');
  listItems.forEach((item) => {
    item.style.backgroundColor = '#fff';
  });
  inputs.forEach((input) => {
    input.style.backgroundColor = '#fff';
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