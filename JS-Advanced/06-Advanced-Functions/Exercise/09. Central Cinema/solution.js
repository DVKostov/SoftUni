function solve() {
    let name = document.getElementById('container').children[0];
    let hall = document.getElementById('container').children[1];
    let ticketPrice = document.getElementById('container').children[2];
    let onScreenButton = document.getElementById('container').children[3];
    let moviesOnScreen = document.getElementById('movies').children[1];
    let archiveScreen = document.getElementById('archive').children[1];
    let clearButton = document.getElementById('archive').children[2];

    onScreenButton.addEventListener('click', addToScreen);
    clearButton.addEventListener('click', clear);

    function addToScreen(event) {
        event.preventDefault();
        if (name.value !== '' && hall.value !== '' && (Number(ticketPrice.value) || ticketPrice.value === 0)) {

            let item = document.createElement('li');
            moviesOnScreen.appendChild(item);

            let div = document.createElement('div');
            item.appendChild(div);

            let span = document.createElement('span');
            span.textContent = name.value;
            item.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall.value}`;
            item.appendChild(strong);

            let strongPRC = document.createElement('strong');
            strongPRC.textContent = Number(ticketPrice.value).toFixed(2);
            div.appendChild(strongPRC);

            let input = document.createElement('input');
            div.appendChild(input);

            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', archive)
            div.appendChild(button);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function archive (event) {
        event.preventDefault();
        let qty = event.target.parentElement.children[1].value
        let name = event.target.parentElement.parentElement.children[1].textContent;
        let prc = Number(event.target.parentElement.children[0].textContent);
        if (Number(qty) || qty === 0) {

            

            let item = document.createElement('li');
            archiveScreen.appendChild(item);

            let span = document.createElement('span');
            span.textContent = name;
            item.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${(prc * Number(qty)).toFixed(2)}`;
            item.appendChild(strong);

            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', del);
            item.appendChild(button);

          //  event.target.parentElement.parentElement.remove();

        }
    }

    function del (event) {
        event.preventDefault();
        event.target.parentElement.remove();
    }

    function clear (event) {
        event.preventDefault();
        let items = Array.from(event.target.parentElement.children[1].children);
        for (let index = 0; index < items.length; index++) {
            items[index].remove();
            
        }
    }

}