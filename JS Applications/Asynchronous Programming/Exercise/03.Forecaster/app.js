function attachEvents() {
    submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submit);
}

attachEvents();

async function submit() {
    let forecast = document.getElementById('forecast');
    let input = document.getElementById('location');
    let host = 'http://localhost:3030/jsonstore/forecaster/';
    let locationList = await asyncRequest(host + 'locations');
    let location = locationList.filter(e => e.name == input.value)[0];
    if (location) {
        let today = await asyncRequest(host + 'today/' + location.code);
        addToday(today);
        let upcoming = await asyncRequest(host + 'upcoming/' + location.code);
        addUpcoming(upcoming);
        forecast.style.display = 'block'
    }
}

function addUpcoming (upcoming) {
    
    let forecasts = document.getElementsByClassName('forecasts-info')

    if (forecasts.length > 0) {
        forecasts[0].remove();
    }

    let upcomingDiv = document.getElementById('upcoming');
    forecasts = element('div', '', 'forecasts-info', upcomingDiv);
    console.log(upcoming);
    for (const forecast of upcoming.forecast) {
        let upcomingSpan = element('span', '', 'upcoming', forecasts);
        let conditionSymbol = element('span', '', 'condition symbol', upcomingSpan);
        conditionSymbol.innerHTML = symbol(forecast.condition);
        let symbols = element('span', '', 'forecast-data', upcomingSpan);
        symbols.innerHTML = `${forecast.high}&#176;/${forecast.low}&#176;`;
        element('span', forecast.condition, 'forecast-data', upcomingSpan)
    }
}

function symbol(condition) {
    let symbol;
    switch (condition) {
        case 'Sunny':
            symbol = '&#x2600;';
            break;
        case 'Partly sunny':
            symbol = '&#x26C5;';
            break;
        case 'Overcast':
            symbol = '&#x2601;';
            break;
        case 'Rain':
            symbol = '&#x2614;';
            break;
        default:
            break;
    }
    return symbol
}

function addToday(today) {
    
    let forecasts = document.getElementsByClassName('forecasts')

    if (forecasts.length > 0) {
        forecasts[0].remove();
    }
    
    let current = document.getElementById('current');

    forecasts = element('div', '', 'forecasts', current);
    let conditionSymbol = element('span', '', 'condition symbol', forecasts);
    conditionSymbol.innerHTML = symbol(today.forecast.condition);
    let condition = element('span', '', 'condition', forecasts);
    element('span', today.name, 'forecast-data', condition);
    let symbols = element('span', '', 'forecast-data', condition);
    symbols.innerHTML = `${today.forecast.high}&#176;/${today.forecast.low}&#176;`;
    element('span', today.forecast.condition, 'forecast-data', condition);

}

function element(type, textContent, cls, appendTo) {
    let result = document.createElement(type);
    result.textContent = textContent;
    result.classList = cls
    if(appendTo) {
        appendTo.appendChild(result)
    }
    return result
}


async function asyncRequest(url) {
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