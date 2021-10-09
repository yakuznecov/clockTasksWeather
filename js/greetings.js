const form = document.querySelector('.js-form'),
	input = form.querySelector('input'),
	greetings = document.querySelector('.js-greetings');
const USER_LS = 'currentUsername',
	SHOWING_CN = 'showing';

// Сохранение имени пользователя
function saveUsername(text) {
	localStorage.setItem(USER_LS, text);
}

// Считывание значения из поля ввода
function submitHandler(event) {
	event.preventDefault();
	const inputValue = input.value;
	showGreeting(inputValue);
	saveUsername(inputValue);
}

// Вывод приветствия
function showGreeting(text) {
	greetings.innerText = `Привет, ${text}`;
	greetings.classList.add(SHOWING_CN);
	form.classList.remove(SHOWING_CN);
}

// Запрос имени пользователя
function askForUsername() {
	form.classList.add(SHOWING_CN);
	form.addEventListener('submit', submitHandler);
}

function loadUsername() {
	const currentUsername = localStorage.getItem(USER_LS);
	if (currentUsername === null) {
		askForUsername();
	} else {
		showGreeting(currentUsername);
	}
}

function init() {
	loadUsername();
}

init();
