class Person {
    constructor (name) {
        this.name = name;
    }
}

function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}



let a = new Person('A')
console.log(a);
extendProrotype(Person)
console.log(a.toString());