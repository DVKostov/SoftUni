function solve(input) {
    class Neighborhood {
        constructor (name) {
            this.name = name;
            this.ppl = [];
            this.pplCount = 0
        }
    }
    let names = input.shift().split(', ');
    let neighborhoods = [];
    for (let index = 0; index < names.length; index++) {
        neighborhoods.push(new Neighborhood(names[index]));    
    }
    for (let index = 0; index < input.length; index++) {
        let [name, person] = input[index].split(' - ');
        if(neighborhoods.find(element => element.name === name) !== undefined) {
            neighborhoods.find(element => element.name === name).ppl.push(person);
            neighborhoods.find(element => element.name === name).pplCount += 1;
        } 
    }
    let sorted = neighborhoods.sort((a, b) => b.pplCount - a.pplCount);
    for (let index = 0; index < neighborhoods.length; index++) {
        console.log(`${neighborhoods[index].name}: ${neighborhoods[index].pplCount}`);
        for (let innerIndex = 0; innerIndex < neighborhoods[index].ppl.length; innerIndex++) {
            console.log(`--${neighborhoods[index].ppl[innerIndex]}`)
            
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']

)