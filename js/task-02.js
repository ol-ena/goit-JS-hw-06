const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = [];

ingredients.forEach(ingredient => {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add('item'); 
  createList.push(li);
});

document.querySelector('ul').append(...createList);

//const createList = document.createElement(`li`);
//ingredients.forEach(element => console.log(element));
//createList.textContent = ``;
//createList.classList.add(item);
