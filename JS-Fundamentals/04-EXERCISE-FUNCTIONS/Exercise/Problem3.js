function result(firstChar, secondChar) {
    let start
    let end
    if (firstChar.charCodeAt(0) < secondChar.charCodeAt(0)) {
        start = firstChar.charCodeAt(0)
        end = secondChar.charCodeAt(0)
    } else {
        start = secondChar.charCodeAt(0)
        end = firstChar.charCodeAt(0)
    }
    let result = ''
    for (let index = start + 1; index <= end - 1; index++) {
        result += ` ${String.fromCharCode(index)}`

    }




    return result
}
console.log(result('C',
    '#'

))