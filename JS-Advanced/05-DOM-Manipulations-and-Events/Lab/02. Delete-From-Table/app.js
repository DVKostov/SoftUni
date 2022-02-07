function deleteByEmail() {
    let input = document.getElementsByName("email")[0].value;
    let array = Array.from(document.querySelectorAll('td')).filter(e => e.textContent === input);
    if (array.length > 0) {
        array[0].parentElement.remove();
        document.getElementById('result').textContent = 'Deleted.'
    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
}