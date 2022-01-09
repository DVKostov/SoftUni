function repeatString(string, repeatCount) {
    let newString = ''
    for (let index = 0; index < repeatCount; index++) {
        newString = newString.concat(string)
    }
    return newString
}
repeatString('abc',
    3
    )