const counter = document.querySelector('#counter');
const refs = {

value: document.querySelector('#value'),
decrementEl: document.querySelector('[data-action="decrement"]'),
incrementEl:document.querySelector('[data-action="increment"]'),
    }
let counterValue = 0;

refs.decrementEl.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
    // console.log(' -1' );
});

refs.incrementEl.addEventListener('click', () => {
     counterValue += 1;
    value.textContent = counterValue;
    // console.log(' +1');
});
