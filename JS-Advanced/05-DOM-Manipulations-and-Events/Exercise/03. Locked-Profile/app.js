function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    for (button of buttons) {
        button.addEventListener('click', showMore)
    }

    function showMore(event) {
        if (event.target.parentElement.children[4].checked) {
            if (event.target.textContent === 'Show more') {
                event.target.parentElement.children[9].style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                event.target.parentElement.children[9].style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}