function addItem() {
    let menu = document.getElementById('menu');
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    //let newOption = new Option(text.value, value.value);
    let newOption = document.createElement('option');
    newOption.text = text.value;
    newOption.value = value.value;
    menu.appendChild(newOption);
    text.value = '';
    value.value = '';
}