function solve() {
    let addWorkerButton = document.getElementById('add-worker');
    addWorkerButton.addEventListener('click', addWorker);

    let inputs = []
    inputs.push(document.getElementById('fname'));
    inputs.push(document.getElementById('lname'));
    inputs.push(document.getElementById('email'));
    inputs.push(document.getElementById('birth'));
    inputs.push(document.getElementById('position'));
    inputs.push(document.getElementById('salary'));

    let tBody = document.getElementById('tbody')
    let sum = document.getElementById('sum');


    function addWorker (event) {
        event.preventDefault();
        if (inputs.filter(e => e.value === '').length === 0) {

            sum.textContent = (Number(sum.textContent) + Number(inputs[inputs.length - 1].value)).toFixed(2)

            let row = document.createElement('tr');

            for (let index = 0; index < inputs.length; index++) {
                let td = document.createElement('td');
                td.textContent = inputs[index].value;
                row.appendChild(td);
                inputs[index].value = '';
            }

            let tdLast = document.createElement('td');
            let firedButton = document.createElement('button');
            firedButton.className = 'fired';
            firedButton.textContent = 'Fired';
            firedButton.addEventListener('click', fired);
            let editButton = document.createElement('button');
            editButton.className = 'edit';
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', edit);
            tdLast.appendChild(firedButton);
            tdLast.appendChild(editButton);
            row.appendChild(tdLast);

            tBody.appendChild(row);
        }

        

    }


    function fired (event) {
        let tr = event.target.parentElement.parentElement;
        let array = Array.from(event.target.parentElement.parentElement.children);
        array.pop();

        sum.textContent = (Number(sum.textContent) - Number(array[array.length - 1].textContent)).toFixed(2)
        tr.remove();
    }

    function edit (event) {
        let tr = event.target.parentElement.parentElement;
        let array = Array.from(event.target.parentElement.parentElement.children);
        array.pop();

        sum.textContent = (Number(sum.textContent) - Number(array[array.length - 1].textContent)).toFixed(2)

        for (let index = 0; index < inputs.length; index++) {
            inputs[index].value = array[index].textContent;
        }
        tr.remove();
    }

}
solve()