function toggle() {
    if (document.getElementById('extra').style.display === 'none') {
        document.getElementById('extra').style.display = 'block';
        document.getElementById('accordion').children[0].children[0].textContent = 'Less';
    } else {
        document.getElementById('extra').style.display = 'none';
        document.getElementById('accordion').children[0].children[0].textContent = 'More';
    }
}