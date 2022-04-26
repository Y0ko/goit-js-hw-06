function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onWidget = document.querySelector('.change-color');
const onBody = document.querySelector('body');
const onColor = document.querySelector('.color');


onWidget.addEventListener('click', onChengeColor);

function onChengeColor(event){
  const chengColor = getRandomHexColor()
  onBody.style.backgroundColor = chengColor;
  onColor.textContent = chengColor;
}