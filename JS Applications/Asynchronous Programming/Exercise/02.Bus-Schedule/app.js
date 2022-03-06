function solve() {
    let stopId = 'depot';
    
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');
    let info = document.getElementById('info').children[0];

    function depart() {
        info.textContent = `Next stop ${stopId}`;
        departButton.disabled = true;
        arriveButton.disabled = '';
    }

    async function arrive() {
        departButton.disabled = '';
        arriveButton.disabled = true;
        info.textContent = `Arriving at ${stopId}`;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
        let busStop = await asyncRequest(url);
        stopId = busStop.next
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
            departButton.disabled = true;
            arriveButton.disabled = true;
            info.textContent = `Error`;
        }
    }




    return {
        depart,
        arrive
    };
}

let result = solve();