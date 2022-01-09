function solve(input) {
    let letter = input[0].split(' ');
    let words = input[1];
    for (let index = 0; index < letter.length; index++) {
        if (letter[index].startsWith('_')) {
            let cut = '';
            if (letter[index][letter[index].length - 1] !== '_') {
                cut = letter[index][letter[index].length - 1]
            }
            let wordLength = letter[index].length - cut.length;
            let findWord = words.filter(w => w.length === wordLength)[0];
            if (findWord !== undefined) {
                letter[index] = findWord + cut;
            }
        }
    }

    console.log(letter.join(' '));

}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]

)