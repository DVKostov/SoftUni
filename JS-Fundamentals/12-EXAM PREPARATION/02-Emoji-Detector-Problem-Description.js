function solve (input) {
    let text = input[0];
    let emojis = {};
    let patternNumbers = /\d/g;
    let patternText = /((\*\*)|(::))([A-Z][a-z]{2,})\1/g;
    let total = text.match(patternNumbers).map(Number).reduce((a,b) => a * b);
    console.log(`Cool threshold: ${total}`);
    while ((match = patternText.exec(text)) !== null) {
        let str = match[4].split('');
        let sum = 0;
        for (const iterator of str) {
            sum += iterator.charCodeAt();
        }
        emojis[match[0]] = sum;
    }
    console.log(`${Object.keys(emojis).length} emojis found in the text. The cool ones are:`);
    let filteredEmofis = Object.entries(emojis).filter(e => e[1] > total)
    for (const iterator of filteredEmofis) {
        console.log(`${iterator[0]}`);
    }
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]
  )