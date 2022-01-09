function Problem3(array) {
    let cards = array.shift().split(':');
    let deck = [];
    for (let index = 0; index < array.length; index++) {
        let [action, firstParam, secondParam] = array[index].split(' ');
        if (action === 'Add') {
            if (cards.indexOf(firstParam) < 0) {
                console.log(`Card not found.`);
            } else {
                deck.push(firstParam);
                cards.splice(cards.indexOf(firstParam), 1);
            }
        } else if (action === 'Insert') {
            if (cards.indexOf(firstParam) < 0) {
                console.log(`Error!`);
            } else {
                deck.splice(Number(secondParam), 0, firstParam);
                cards.splice(cards.indexOf(firstParam), 1);
            }
        } else if (action === 'Remove') {
            if (deck.indexOf(firstParam) < 0) {
                console.log(`Card not found.`);
            } else {
                deck.splice(deck.indexOf(firstParam), 1);
                cards.push(firstParam);
            }
        } else if (action === 'Swap') {
            let indexOne = deck.indexOf(firstParam);
            let indexTwo = deck.indexOf(secondParam);
            if (indexOne > -1 && indexTwo > -1) {
                deck[indexOne] = secondParam;
                deck[indexTwo] = firstParam;
            }
        } else if (action === 'Shuffle') {
            if (deck.length > 0) {
                deck = deck.reverse();
            }
        } else if (action === 'Ready') {
            
            break;
        }
    }
    console.log(deck.join(' '));
}
Problem3(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Pounce",
    "Add Bite",
    "Add Wrath",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Shuffle deck",
    "Ready"])