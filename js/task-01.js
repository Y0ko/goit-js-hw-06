// const ulEl = document.querySelectorAll('.item');
// console.log(`Number of categories:`, ulEl.length);
// // ======================================
// const catEll = document.querySelector('ul#categories');
// console.log(`Number of categories:`, catEll.children.length);

// ulEl.forEach(element =>element.textContent);

// const first = catEll.firstChild;
// console.log(first);

// const two = first.nextSibling;
// console.log(two);
// const tre = two.nextSibling;
// console.log(tre);


const ulEl = document.querySelectorAll('.item');
const count = (elements) => {
    console.log(`Number of categories: ${elements.length}`);
    elements.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
     console.log(`Elements: ${element.lastElementChild.childElementCount}`);
    }) 
    };

count(ulEl);
