window.addEventListener('load', solve);

function solve() {
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', add);

    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let tb = document.getElementById('furniture-list');
    let total = document.getElementsByClassName('total-price')[0];

    function add(event) {
        event.preventDefault();
        if (modelInput.value && descriptionInput.value && Number(yearInput.value) && Number(yearInput.value).toFixed(2) > 0 && Number(priceInput.value) && Number(priceInput.value).toFixed(2) > 0) {

            let tr0 = document.createElement('tr');
            tr0.className = 'info';

            let td0 = document.createElement('td');
            td0.textContent = modelInput.value;

            let td1 = document.createElement('td');
            td1.textContent = Number(priceInput.value).toFixed(2);

            tr0.appendChild(td0);
            tr0.appendChild(td1);

            let td2 = document.createElement('td');

            let moreBtn = document.createElement('button');
            moreBtn.className = 'moreBtn';
            moreBtn.textContent = 'More Info';
            moreBtn.addEventListener('click', more);

            let buyBtn = document.createElement('button');
            buyBtn.className = 'buyBtn';
            buyBtn.textContent = 'Buy it';
            buyBtn.addEventListener('click', buy);

            td2.appendChild(moreBtn);
            td2.appendChild(buyBtn);
            tr0.appendChild(td2);

            let tr1 = document.createElement('tr');
            tr1.className = 'hide';

            let td3 = document.createElement('td');
            td3.textContent = `Year: ${yearInput.value}`

            let td4 = document.createElement('td');
            td4.colSpan = 3
            td4.textContent = `Description: ${descriptionInput.value}`

            tr1.appendChild(td3);
            tr1.appendChild(td4);

            tb.appendChild(tr0);
            tb.appendChild(tr1);

            modelInput.value = ''
            yearInput.value = ''
            descriptionInput.value = ''
            priceInput.value = ''
        }
    }

    function more(event) {
        let target = event.target;
        let hideRow = Array.from(tb.children)[Array.from(tb.children).indexOf(target.parentElement.parentElement) + 1]
        if (target.textContent === 'More Info') {
            target.textContent = 'Less Info';
            hideRow.style.display = 'contents';
        } else {
            target.textContent = 'More Info';
            hideRow.style.display = 'none';
        }
    }
    function buy(event) {
        let target = event.target;
        total.textContent = Number(Number(total.textContent) + Number(target.parentElement.parentElement.children[1].textContent)).toFixed(2);
        Array.from(tb.children)[Array.from(tb.children).indexOf(target.parentElement.parentElement) + 1].remove();
        Array.from(tb.children)[Array.from(tb.children).indexOf(target.parentElement.parentElement)].remove();
        
    }

}
