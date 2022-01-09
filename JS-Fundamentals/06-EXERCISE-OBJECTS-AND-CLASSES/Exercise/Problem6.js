function info(input) {
    class Word {
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }
    }
    let dictionary = [];
    for (let index = 0; index < input.length; index++) {
        let obj = JSON.parse(input[index])
        let term = Object.keys(obj)[0];
        let definition = Object.values(obj)[0];
        if (dictionary.find(word => word.term === term) === undefined) {
            dictionary.push(new Word(term, definition));
        } else {
            dictionary.find(word => word.term === term).definition = definition;
        }
    }

    function compare(a, b) {
        if (a.term < b.term) {
            return -1;
        }
        if (a.term > b.term) {
            return 1;
        }
        return 0;
    }

    dictionary.sort(compare);
    for (let index = 0; index < dictionary.length; index++) {
        console.log(`Term: ${dictionary[index].term} => Definition: ${dictionary[index].definition}`)

    }

}
info([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)