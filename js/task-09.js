function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onWidget = document.querySelector('.widget');
const onColor = document.querySelector('.color');
const onBody = document.querySelector('.body');

onWidget.addEventListener('click', onChengeColor);

function onChengeColor(event){
  const chengColor = getRandomHexColor();
  onColor.style.backgroundColor = chengColor;
  onColor.textContent = chengColor;
}