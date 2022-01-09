function solve(input) {
    class City {
        constructor(name, population, gold) {
            this.name = name;
            this.population = population;
            this.gold = gold;
        }
    }
    let cities = [];
    let sail = false;
    for (const iterator of input) {
        if (iterator === 'End') { break; };
        if (iterator === 'Sail') { sail = true; continue; };
        if (!sail) {
            let [name, population, gold] = iterator.split('||');
            let currentCity = cities.find(c => c.name === name);
            if (currentCity === undefined) {
                cities.push(new City(name, Number(population), Number(gold)));
            } else {
                currentCity.population += Number(population);
                currentCity.gold += Number(gold);
            }
        } else {
            let [command, name, x, y] = iterator.split('=>');
            let currentCity = cities.find(c => c.name === name);
            switch (command) {
                case 'Plunder':
                    console.log(`${name} plundered! ${y} gold stolen, ${x} citizens killed.`)
                    currentCity.population -= Number(x);
                    currentCity.gold -= Number(y);
                    if (currentCity.population === 0 || currentCity.gold === 0) {
                        console.log(`${name} has been wiped off the map!`);
                        cities.splice(cities.indexOf(currentCity), 1);
                    }
                    break;
                case 'Prosper':
                    if (Number(x) < 0) {
                        console.log(`Gold added cannot be a negative number!`);
                    } else {
                        currentCity.gold += Number(x);
                        console.log(`${x} gold added to the city treasury. ${name} now has ${currentCity.gold} gold.`);
                    }
                    break;

            }
        }
    }
    if (cities.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`);
        let sorted = cities.sort((a, b) => b.gold - a.gold || a.name.localeCompare(b.name));
        for (const iterator of sorted) {
            console.log(`${iterator.name} -> Population: ${iterator.population} citizens, Gold: ${iterator.gold} kg`)
        }
    }
}
solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]
)