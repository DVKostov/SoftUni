function validate() {
    document.getElementById('email').addEventListener('change', change);
    function change (event) {
        let pattern = /[a-z]@[a-z]*\.[a-z]/
        let text = event.target.value
        let test = pattern.test(text)
        if (test) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}