function solve(array, param1, param2) {
    let newArray = array.slice(array.indexOf(param1));
    let start = newArray.indexOf(param2) + 1;
    let del = newArray.length - array.indexOf(param2);
    newArray.splice(start, del);
    return newArray;
}

console.log(solve(["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
'Key Lime Pie',
'Lemon Meringue Pie'

));