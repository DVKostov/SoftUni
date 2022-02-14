function solve(array) {

    let brands = {};

    class Brand {
        constructor(brand) {
            this.brand = brand;
            this.models = {};
        }
    }

    class Model {
        constructor(model, qty) {
            this.model = model;
            this.qty = qty;
        }
        add(num) {
            this.qty += num;
        }
    }

    for (let index = 0; index < array.length; index++) {
        let [brand, model, qty] = array[index].split(' | ');
        let b = brands[brand];
        if (!b) {
            b = new Brand(brand);
            brands[brand] = b;
        }
        let m = b.models[model];
        if (!m) {
            m = new Model(model, Number(qty));
            b.models[model] = m;
        } else {
            m.add(Number(qty));
        }
    }

    let records = Object.entries(brands)

    for (const record of records) {
        console.log(record[0]);
        let cars = Object.entries(record[1].models);
        for (const car of cars) {
            console.log(`###${car[0]} -> ${car[1].qty}`); 
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);