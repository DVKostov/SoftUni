function generateReport() {
    let result = [];
    let rows = document.querySelectorAll('table tr');
    let header = rows[0].children;
    for (let index = 1; index < rows.length; index++) {
        let row = rows[index].children;
        let col = {};
        for (let i = 0; i < row.length; i++) {
            let checked = header[i].children[0].checked;
            if (checked) {
                col[header[i].textContent.trim()] = row[i].textContent;
            }
        }
        result.push(col)
    }
    document.getElementById('output').value = JSON.stringify(result);
}