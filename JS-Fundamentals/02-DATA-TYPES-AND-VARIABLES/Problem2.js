function Problem2 (firstStr, char, secondSrt) {
    let result = firstStr.replace('_', char)
    if (result == secondSrt) {
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
    
}
Problem2 ('Str_ng', 'i', 'String')