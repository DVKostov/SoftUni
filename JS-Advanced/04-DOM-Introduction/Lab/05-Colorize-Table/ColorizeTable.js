function colorize() {
    let tr = Array.from(document.querySelectorAll("table tr"));
    for (let index = 1; index < tr.length; index++) {
        if (index % 2 !== 0) {
            tr[index].style.background = "teal"
        }
        
    }
}