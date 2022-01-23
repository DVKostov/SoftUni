function solve(array) {
    newArray = [];
    for (let index = 0; index < array.length; index++) {
        let [product, price] = array[index].split(' : ');
        price = Number(price);
        newArray.push({product, price})       
    }

    newArray = newArray.sort((a, b) => a.product.localeCompare(b.product));

    let letter = newArray[0].product[0];
    console.log(letter);
    for (let index = 0; index < newArray.length; index++) {
        if (newArray[index].product[0] !== letter) {
            letter = newArray[index].product[0];
            console.log(letter);
        } 
        console.log(`  ${newArray[index].product}: ${newArray[index].price}`);
        
    }
}

console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));