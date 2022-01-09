function solve(input) {
    class Destination {
        constructor(country) {
            this.country = country;
            this.towns = [];
        }
    }
    class Town {
        constructor(town, cost) {
            this.town = town;
            this.cost = cost;
            this.addCost = (cost) => {
                if (cost < this.cost) {
                    this.cost = cost;
                }
            }
        }
    }
    let destinations = [];
    for (const iterator of input) {
        let [country, town, cost] = iterator.split(' > ');
        let findContry = destinations.find(c => c.country === country);
        if (findContry === undefined) {
            destinations.push(new Destination(country))
        }
        findContry = destinations.find(c => c.country === country);
        let findTown = findContry.towns.find(t => t.town === town);
        if (findTown === undefined) {
            findContry.towns.push(new Town(town, Number(cost)));
        } else {
            findTown.addCost(Number(cost));
        }
    }
    let sorted = destinations.sort((a, b) => a.country.localeCompare(b.country));
    for (const iterator of sorted) {
        let sortedIterator = iterator.towns.sort((a, b) => a.cost - b.cost);
        let print = [];
        for (const i of sortedIterator) {
            print.push(`${i.town} -> ${i.cost}`);
        }
        console.log(`${iterator.country} -> ${print.join(' ')}`)
    }
}



solve(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
)