function solve(array) {
    return array.sort(function (a,b) {
        let diff = a.length - b.length;
        if (diff > 0) return 1
        if (diff < 0) return -1
        return a.localeCompare(b)
    }).join('\n')
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

));