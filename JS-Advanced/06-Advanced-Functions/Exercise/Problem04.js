
function solution() {

    let inventory = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0,
    };

    function report() {
        let ingredients = Object.entries(inventory);
        ingredients = ingredients.map(e => `${e[0]}=${e[1]}`)

        return ingredients.join(' ')
    }

    let recipes = {
        apple(qty) {
            let carbohydrate = qty;
            let flavour = qty * 2;

            if (inventory["carbohydrate"] < carbohydrate) { return error("carbohydrate") }
            if (inventory["flavour"] < flavour) { return error("flavour") }

            inventory["carbohydrate"] -= carbohydrate;
            inventory["flavour"] -= flavour;
            return 'Success'

        },
        lemonade(qty) {
            let carbohydrate = qty * 10;
            let flavour = qty * 20;

            if (inventory["carbohydrate"] < carbohydrate) { return error("carbohydrate") }
            if (inventory["flavour"] < flavour) { return error("flavour") }

            inventory["carbohydrate"] -= carbohydrate;
            inventory["flavour"] -= flavour;
            return 'Success'

        },
        burger(qty) {
            let carbohydrate = qty * 5;
            let fat = qty * 7;
            let flavour = qty * 3;

            if (inventory["carbohydrate"] < carbohydrate) { return error("carbohydrate") }
            if (inventory["fat"] < fat) { return error("fat") }
            if (inventory["flavour"] < flavour) { return error("flavour") }

            inventory["carbohydrate"] -= carbohydrate;
            inventory["fat"] -= fat;
            inventory["flavour"] -= flavour;

            return 'Success'

        },
        eggs(qty) {
            let protein = qty * 5;
            let fat = qty;
            let flavour = qty * 3;

            if (inventory["protein"] < protein) { return error("protein") }
            if (inventory["fat"] < fat) { return error("fat") }
            if (inventory["flavour"] < flavour) { return error("flavour") }

            inventory["protein"] -= protein;
            inventory["fat"] -= fat;
            inventory["flavour"] -= flavour;

            return 'Success'

        },
        turkey(qty) {
            let protein = qty * 10;
            let carbohydrate = qty * 10;
            let fat = qty * 10;
            let flavour = qty * 10;

            if (inventory["protein"] < protein) { return error("protein") }
            if (inventory["carbohydrate"] < carbohydrate) { return error("carbohydrate") }
            if (inventory["fat"] < fat) { return error("fat") }
            if (inventory["flavour"] < flavour) { return error("flavour") }

            inventory["protein"] -= protein;
            inventory["carbohydrate"] -= carbohydrate;
            inventory["fat"] -= fat;
            inventory["flavour"] -= flavour;

            return 'Success'

        }
    }

    function error(ingredient) {
        return `Error: not enough ${ingredient} in stock`
    }

    return function command(input) {
        let array = input.split(' ');
        switch (array[0]) {
            case 'restock':
                inventory[array[1]] += Number(array[2]);
                return 'Success'
            case 'prepare':
                return recipes[array[1]](Number(array[2]));
            case 'report':
                return report();
            default:
                break;
        }
    }
}



let manager = solution();


console.log(manager('restock carbohydrate 10'));//, 'Success'],
console.log(manager('restock flavour 10'));//, 'Success'],
console.log(manager('prepare apple 1'));//, 'Success'],
console.log(manager('restock fat 10'));//, 'Success'],
console.log(manager('prepare burger 1'));//, 'Success'],
console.log(manager('report'));//, 'protein=0 carbohydrate=4 fat=3 flavour=5']