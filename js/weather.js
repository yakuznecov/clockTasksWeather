const COORDS_LS = 'coords';
const API_KEY = '2002e58b1b63a441b83a6b24a53cf29a';

const weatherContainer = document.querySelector('.js-weather');

function getWeather(lat, lng) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			const temperature = json.main.temp;
			const place = json.name;
			weatherContainer.innerText = `${temperature} @ ${place}`;
		});
}

function saveCoords(positionObj) {
	localStorage.setItem(COORDS_LS, JSON.stringify(positionObj));
}

function geoSuccessHandler(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const positionObj = {
		latitude: latitude,
		longitude: longitude,
	};
	saveCoords(positionObj);
	getWeather(latitude, longitude);
}

function geoErrorHandler() {
	console.log('Ошибка определения геопозиции');
}

// запрос координат
function askForCoords() {
	navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler);
}

// Получение координат
function getCoords() {
	const coords = localStorage.getItem(COORDS_LS);
	if (coords === null) {
		askForCoords();
		// функция запроса координат, если нет значений
	} else {
		// функция получения погоды
		const loadedCoords = JSON.parse(coords);
		getWeather(loadedCoords.latitude, loadedCoords.longitude);
	}
}

function init() {
	getCoords();
}

init();
