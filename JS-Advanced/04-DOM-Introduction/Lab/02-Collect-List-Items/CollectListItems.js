function extractText() {
    let result = '';
    let el = document.getElementById('items').children;
    for (let index = 0; index < el.length; index++) {
        result += `${el[index].textContent}\n`
    }
    document.getElementById('result').value = result
}