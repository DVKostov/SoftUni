function info(stock, delivery) {
    class Product {
        constructor(name, qty) {
            this.name = name;
            this.qty = qty;
        }
    }
    let inventory = [];
    for (let index = 0; index < stock.length - 1; index += 2) {
        inventory.push(new Product(stock[index], Number(stock[index + 1])));
    }
    for (let index = 0; index < delivery.length - 1; index += 2) {
        let filtered = inventory.filter(product => product.name === delivery[index]);
        if (filtered.length === 0 ) {
            inventory.push(new Product(delivery[index], Number(delivery[index + 1])));
        } else {
            inventory.find(product => product.name === delivery[index]).qty += Number(delivery[index + 1])
        }
    }
    for (let index = 0; index < inventory.length; index++) {
            console.log(`${inventory[index].name} -> ${inventory[index].qty}`)
        
        
    }

}
info(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
    
)