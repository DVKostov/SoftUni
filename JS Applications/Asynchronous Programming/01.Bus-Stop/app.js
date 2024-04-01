async function getInfo() {
    var stopId = document.getElementById('stopId').value;
    var stopInfo = await getRequest(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
    clearInfo();
    fulfillInfo(stopInfo);
}

function fulfillInfo(stopInfo) {

    if (stopInfo.hasOwnProperty('name')) {

        document.getElementById('stopName').innerText = stopInfo.name;
        let list = document.getElementById('buses');

        Object.entries(stopInfo.buses).forEach(bus => {
            let newElement = document.createElement("li");
            newElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            list.appendChild(newElement);
        })
    } else {
        document.getElementById('stopName').innerText = 'Error';
    }
}

function clearInfo() {
    document.getElementById('stopName').innerText = '';
    document.getElementById('buses').innerHTML = '';
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