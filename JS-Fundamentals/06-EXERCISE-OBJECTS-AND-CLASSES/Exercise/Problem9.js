function info(input) {
    class Product {
        constructor(productName, productPrice) {
            this.productName = productName;
            this.productPrice = productPrice;
        }
    }
    let catalogue = [];
    for (let index = 0; index < input.length; index++) {
        let [productName, productPrice] = input[index].split(' : ');
        catalogue.push(new Product(productName, Number(productPrice)))
    }
    function compare(a, b) {
        if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
            return -1;
        }
        if (a.productName.toLowerCase() > b.productName.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    catalogue.sort(compare);
    let letter = '';
    for (let index = 0; index < catalogue.length; index++) {
        if (catalogue[index].productName[0] !== letter) {
            letter = catalogue[index].productName[0];
            console.log(catalogue[index].productName[0]);
        }
        console.log(`  ${catalogue[index].productName}: ${catalogue[index].productPrice}`)
    }
}
info([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]
)