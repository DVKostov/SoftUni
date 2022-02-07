function addItem() {
    let text = document.getElementById("newItemText").value;
    if (text) {
        let newElement = document.createElement("li");
        newElement.textContent = text;
        document.getElementById("items").appendChild(newElement);
    }
}