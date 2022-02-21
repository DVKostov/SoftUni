class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];

    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.listOfParticipants.filter(e => (e.name === name)).length > 0) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {
        let e = this.listOfParticipants.filter(e => (e.name === name))[0];
        let i = this.listOfParticipants.indexOf(e);
        if (!e) {
            throw Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(i, 1);
        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.filter(e => (e.name === participant1))[0];
        let p2 = this.listOfParticipants.filter(e => (e.name === participant2))[0];
        switch (typeOfGame) {
            case 'Battleship':
                if (!p1) { throw new Error(`Invalid entered name/s.`) }
                p1.power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`

            case 'WaterBalloonFights':
                if (!p1 || !p2) { throw new Error(`Invalid entered name/s.`) }
                if (p1.condition !== p2.condition) { throw new Error(`Choose players with equal condition.`) }
                if (p1.power > p2.power) {
                    p1.wins += 1;
                    return `The ${p1.name} is winner in the game ${typeOfGame}.`
                } else if (p1.power < p2.power) {
                    p2.wins += 1;
                    return `The ${p2.name} is winner in the game ${typeOfGame}.`
                } else {
                    return `There is no winner.`
                }
        }
    }
    toString () {
        let ppl = this.listOfParticipants.sort((a, b) => (b.wins - a.wins));
        let result = `${this.organizer} will take ${ppl.length} participants on camping to ${this.location}`
        for (let index = 0; index < ppl.length; index++) {
            result += `\n${ppl[index].name} - ${ppl[index].condition} - ${ppl[index].power} - ${ppl[index].wins}`            
        }
        return result
    }
}






const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



//The Petar Petarson was successfully registered.
//The Petar Petarson successfully completed the game Battleship.
//The Sara Dickinson was successfully registered.
//Uncaught Error: Choose players with equal condition.//
//The Dimitur Kostov was successfully registered.
//The Petar Petarson is winner in the game WaterBalloonFights.
//Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
//Petar Petarson - student - 120 - 1
//Sara Dickinson - child - 100 - 0
//Dimitur Kostov - student - 100 - 0

