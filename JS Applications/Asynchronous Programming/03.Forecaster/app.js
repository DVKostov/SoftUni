
attachEvents();
let inputLocation = document.getElementById('location');
let currentDiv = document.getElementById('current');
let upcomingDiv = document.getElementById('upcoming');

let topTodaySpan = document.createElement("span");
topTodaySpan.className = 'forecast'

function attachEvents() {
    document.getElementById('submit').addEventListener("click", getWeather);
}

function settodayForecast(todayForecast) {
    document.getElementById('forecast').style.display = 'block';
    topTodaySpan.innerHTML = '';

    let conditionSymbol = document.createElement("span");
    conditionSymbol.className = 'condition symbol';
    conditionSymbol.innerText = `&#x2600`;
    topTodaySpan.appendChild(conditionSymbol);

    let condition = document.createElement("span");
    condition.className = 'condition';
    topTodaySpan.appendChild(condition);

    let info1 = document.createElement("span");
    info1.className = 'forecast-data';
    info1.innerText = `info1`;
    condition.appendChild(info1);

    let info2 = document.createElement("span");
    info2.className = 'forecast-data';
    info2.innerText = `info2`;
    condition.appendChild(info2);

    let info3 = document.createElement("span");
    info3.className = 'forecast-data';
    info3.innerText = `info3`;
    condition.appendChild(info3);

    currentDiv.appendChild(topTodaySpan)
}

async function getWeather() {
    var locations = await getRequest(`http://localhost:3030/jsonstore/forecaster/locations`);
    var location = locations.filter(l => l.name === inputLocation.value)[0];
    
    var todayForecast = await getRequest(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`);
    var upcomingForecast = await getRequest(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`);

    settodayForecast(todayForecast)
}

async function getRequest(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data
    }
    catch (error) {
        return error
    }
}