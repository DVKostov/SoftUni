function solve(array) {
    let newArray = array.sort(function (a, b) {
        return a.localeCompare(b)
    });
    for (let index = 0; index < newArray.length; index++) {
        console.log(`${index + 1}.${newArray[index]}`);        
    }
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));