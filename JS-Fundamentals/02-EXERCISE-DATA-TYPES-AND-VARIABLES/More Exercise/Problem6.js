function Problem(n) {
    let html = '<div class="chessboard">\n'
    for (let index = 0; index < n; index++) {
        let loop = `  <div> \n`
        for (let indexOne = 0; indexOne < n; indexOne++) {
            if ((index + indexOne) % 2 === 0) {
                loop = loop.concat(`    <span class="black"></span>\n`)
            } else {
                loop = loop.concat(`    <span class="white"></span>\n`)
            }
        }
        loop = loop.concat(`  </div>\n`)
        html = html.concat(loop)
    }
    html = html.concat(`</div>`)
    console.log(html)
}
Problem(3)