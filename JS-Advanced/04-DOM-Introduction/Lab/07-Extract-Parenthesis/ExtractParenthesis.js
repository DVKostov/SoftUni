function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\((.+?)\)/g;
    let array = [];
    let match = pattern.exec(text);
    while (match) {
        array.push(match[1]);
        match = pattern.exec(text);
    }
    return array.join('; ')
}