function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let index = 1; index < rows.length - 1; index++) {
        sum += Number(rows[index].children[1].textContent);
    }
    rows[rows.length - 1].children[1].textContent = sum;
}