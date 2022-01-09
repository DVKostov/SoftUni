function solve(input) {
    class Hand {
        constructor(name) {
            this.name = name;
            this.cards = [];
            this.power = 0;
            this.addPower = (card) => {
                let first = '';
                let second = '';
                if (card.length === 2) {
                    first = card[0];
                    second = card[1]
                } else {
                    first = card[0] + card[1];
                    second = card[2]
                }
                switch (first) {
                    case 'J':
                        first = 11;
                        break;
                    case 'Q':
                        first = 12;
                        break;
                    case 'K':
                        first = 13;
                        break;
                    case 'A':
                        first = 14;
                        break;
                    default:
                        first = Number(first)
                        break;
                }
                switch (second) {
                    case 'S':
                        second = 4;
                        break;
                    case 'H':
                        second = 3;
                        break;
                    case 'D':
                        second = 2;
                        break;
                    case 'C':
                        second = 1;
                        break;
                }
                this.power += first * second
            }
        }
    }
    let hands = [];
    for (const iterator of input) {
        let [name, cards] = iterator.split(': ');
        cards = cards.split(', ');
        if(hands.find(h => h.name === name) === undefined) {
            hands.push(new Hand(name));
        }
        for (const iterator of cards) {
            if (hands.find(h => h.name === name).cards.find(c => c === iterator) === undefined) {
                hands.find(h => h.name === name).cards.push(iterator);
                hands.find(h => h.name === name).addPower(iterator);
            }
        }
    }
    for (let index = 0; index < hands.length; index++) {
        console.log(`${hands[index].name}: ${hands[index].power}`) 
    }



}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]

)