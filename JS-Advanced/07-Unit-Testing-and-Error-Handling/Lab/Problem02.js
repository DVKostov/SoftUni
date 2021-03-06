function solve(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let suits = {
        S: `\u2660`, // (♠), 
        H: `\u2665`, // (♥), 
        D: `\u2666`, // (♦), 
        C: `\u2663` // (♣)
    }
    if (!faces.includes(face) || !suits[suit]) { throw Error('error') }

    let result = {
        face,
        suits: suits[suit],
        toString() {
            return this.face + this.suits;
        }
    }

    return result

}

solve('2', 'C').toString();
