function addItem() {
    let text = document.getElementById("newItemText").value;
    if (text) {
        let newElement = document.createElement("li");
        newElement.textContent = text;
        let remove = document.createElement('a');
        remove.href = '#';
        let deleteLink = document.createTextNode('[Delete]');
        remove.appendChild(deleteLink);
        newElement.appendChild(remove);
        document.getElementById("items").appendChild(newElement);
        remove.addEventListener("click", deleteItem);
    }
    function deleteItem (event) {
        event.target.parentElement.remove()
    }
}