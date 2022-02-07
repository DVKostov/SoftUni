function solve() {
    document.querySelectorAll('button')[0].addEventListener('click', generate);
    document.querySelectorAll('button')[1].addEventListener('click', buy);

    let text = document.querySelectorAll('textarea')[0];
    let output = document.querySelectorAll('textarea')[1];
    let tbody = document.querySelectorAll('tbody')[0];

    function generate() {
        data = JSON.parse(text.value);
        
        for (i of data) {

        let imgData = document.createElement('td');
        let img = document.createElement('img');
        img.src = String(i.img);
        imgData.appendChild(img);

        let price = document.createElement('td');
        let priceP = document.createElement('p');
        priceP.textContent = i.price;
        price.appendChild(priceP);

        let name = document.createElement('td');
        let nameP = document.createElement('p');
        nameP.textContent = i.name;
        name.appendChild(nameP);

        let decFactor = document.createElement('td');
        let decFactorP = document.createElement('p');
        decFactorP.textContent = i.decFactor;
        decFactor.appendChild(decFactorP);

        let checkbox = document.createElement('td');
        let checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkbox.appendChild(checkboxInput);

        let newRow = document.createElement('tr');
        newRow.appendChild(imgData);
        newRow.appendChild(name);
        newRow.appendChild(price);
        newRow.appendChild(decFactor);
        newRow.appendChild(checkbox);

        tbody.appendChild(newRow);

        }

    };

    function buy() {
        let array = Array.from(document.querySelectorAll('input')).filter(e => e.checked === true)
        let items = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        for (i of array) {
            items.push(i.parentElement.parentElement.children[1].children[0].textContent);
            totalPrice += Number(i.parentElement.parentElement.children[2].children[0].textContent);
            totalDecFactor += Number(i.parentElement.parentElement.children[3].children[0].textContent);
        }
        output.value = `Bought furniture: ${items.join(', ')}\n`; 
        output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        output.value += `Average decoration factor: ${totalDecFactor / array.length}`

    };


}