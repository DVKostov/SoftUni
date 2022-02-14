function solve(array) {

    let inventory = [];
    let bottles = [];

    class Juice {
        constructor(name, qty) {
            this.name = name;
            this.qty = qty;
        }
        convert() {
            while (this.qty >= 1000) {
                this.qty -= 1000;
                let bottle = bottles.filter(e => e.name === this.name)[0];
                if (bottle) {
                    bottle.add(1);
                } else {
                    bottle = new Bottle(this.name, 1);
                    bottles.push(bottle);
                }
            }
        }
    }

    class Bottle {
        constructor(name, qty) {
            this.name = name;
            this.qty = qty;
        }
        add(num) {
            this.qty += num;
        }
    }

    for (let index = 0; index < array.length; index++) {
        let [name, qty] = array[index].split(' => ');
        let juice = inventory.filter(e => e.name === name)[0];
        if (juice) {
            juice.qty += Number(qty);
            juice.convert();
        } else {
            juice = new Juice(name, Number(qty))
            juice.convert()
            inventory.push(juice);
        }
    }

    let result = '';
    for (let index = 0; index < bottles.length; index++) {
        result += `${bottles[index].name} => ${bottles[index].qty}\n`
    }

    return result;

}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));