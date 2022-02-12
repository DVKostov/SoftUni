function getArticleGenerator(articles) {
    let array = articles;
    let content = document.getElementById('content')
    return function () {
        if (array.length > 0) {
            let a = document.createElement('article');
            a.textContent = array.shift();
            content.appendChild(a);
        }
    }
}
