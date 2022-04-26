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
  return ingredEl;
  // elem.append(ingredEl);
  // console.log(ingredEl)
  
})
const containerIngrEl = document.querySelector('#ingredients');
  
  containerIngrEl.append(...elements);