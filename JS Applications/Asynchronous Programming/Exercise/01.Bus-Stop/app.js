async function getInfo() {
    
    let stop = document.getElementById('stopId').value
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stop}`
    let info = await asyncRequest(url)
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    buses.innerHTML = '';
    if (info) {
        stopName.textContent = info.name;
        for (const key in info.buses) {
            let bus = document.createElement('li');
            bus.textContent = `Bus ${key} arrives in ${info.buses[key]} minutes`;
            buses.appendChild(bus);
        }
    } else {
        stopName.textContent = 'Error';
    }
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
            console.log(error.message)
        }
    }