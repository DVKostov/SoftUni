function solve() {

    async function depart() {
        switchButtons()
        let schedule = await getRequest(getUrl(nextStop));
        nextStop = schedule.next
        info.innerText = `Next stop ${schedule.next}`
    }

    async function arrive() {
        switchButtons()
        info.innerText = `Arriving at ${nextStop}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

let nextStop = 'depot'

function getUrl(nextStop) {
    return `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`;
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

let depart = document.getElementById('depart');
let arrive = document.getElementById('arrive');
let info = document.getElementById('info');


function switchButtons() {
    depart.disabled = !depart.disabled
    arrive.disabled = !arrive.disabled

}