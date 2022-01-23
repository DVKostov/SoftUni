function solve(array) {
    let towns = {};
    for (let index = 0; index < array.length; index++) {
        let [townName, townPopulation] = array[index].split(' <-> ');
        if (!towns[townName]) {
            towns[townName] = 0
        };
        towns[townName] += Number(townPopulation);
    }
    
    for (const townName in towns) {
        console.log(`${townName} : ${towns[townName]}`);
    }

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Las Vegas <-> 1000000']
)