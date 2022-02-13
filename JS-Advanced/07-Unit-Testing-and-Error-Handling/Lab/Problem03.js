function solve(array) {

    let result = '';

    for (let index = 0; index < array.length; index++) {
        let face = array[index].substring(0, array[index].length - 1)
        let suit = array[index].substring(array[index].length - 1)
        try {
            result += ` ${cardGenerator(face, suit).toString()}`
        } catch {
            console.log(`Invalid card: ${array[index]}`)
        }
    }
    console.log(result)

    function cardGenerator(face, suit) {

        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        let suits = {
            S: `\u2660`, // (♠), 
            H: `\u2665`, // (♥), 
            D: `\u2666`, // (♦), 
            C: `\u2663` // (♣)
        }
        if (!faces.includes(face) || !suits[suit]) { throw Error('error') }

        let card = {
            face,
            suits: suits[suit],
            toString() {
                return this.face + this.suits;
            }
        }

        return card

    }
}

console.log(solve(['AS', '10D', 'KH', '2C']));
console.log(solve(['5S', '3D', 'QD', '1C']));

