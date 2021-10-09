const body = document.querySelector('body');
const IMAGE_NUMBER = 3;
// определяем общее количество картинок в проекте

// Показ картинок
function showImage(number) {
	const img = new Image();
	img.src = `images/${number + 1}.jpg`;
	img.classList.add('bgImage');
	body.prepend(img);
}
// получение случайного числа от 1 до 3
function getRandom() {
	const number = Math.floor(Math.random() * IMAGE_NUMBER);
	return number;
}

function init() {
	const randomNumber = getRandom();
	showImage(randomNumber);
}

init();
