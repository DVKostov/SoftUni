function solve(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        let [town, product, price] = array[index].split(' | ');
        price = Number(price);
        let find = newArray.findIndex(element => element.product === product);
        if (find >= 0) {
            if (newArray[find].price > price) {
                newArray[find].town = town;
                newArray[find].price = price;
            }
        } else {
            newArray.push({town, product, price});
        }
    }

    newArray.forEach(element => console.log(`${element.product} -> ${element.price} (${element.town})`))
    

}

console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));