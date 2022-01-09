function solve(input) {
    let count = Number(input.shift());
    let pattern = /^((\$)|(\%))([A-Z][a-z]{2,})\1(\:\ ){1}([\[][0-9]{2,3}[\]][\|]){3}$/g
    let numbersPattern = /\d{1,}/g;
    for (let index = 0; index < count; index++) {
        let iterator = input[index];
        
        if (iterator.match(pattern) === null) {
            console.log(`Valid message not found!`)
        } else {
            let tag = pattern.exec(iterator)[4];
            let numbers = iterator.match(numbersPattern).map(Number);
            let decoded = '';
            for (const i of numbers) {
                decoded += String.fromCharCode(i); 
            }
            console.log(`${tag}: ${decoded}`)
        }
    }
}
solve(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])



