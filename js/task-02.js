const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elem = document.querySelector('#ingredients');
console.log(elem);

const elements = ingredients.map(atrib => { 
  const ingredEl = document.createElement('li');
  ingredEl.textContent = atrib;
  ingredEl.classList.add('item');
  elem.append(ingredEl);
  // console.log(ingredEl)
})