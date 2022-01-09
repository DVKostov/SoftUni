function solve(input) {
    let string = input.shift();

    for (let index = 0; index < input.length; index++) {
        if (input[index] === 'Finish') { break; };
        let [command, z, x] = input[index].split(' ');
        switch (command) {
            case 'Replace':
                while (string.includes(z)) {
                    string = string.replace(z, x);
                }
                console.log(string);
                break;
            case 'Cut':
                z = Number(z);
                x = Number(x) +1;
                if (z < 0 || z > string.length - 1 || x <= z || x > string.length) {
                    console.log(`Invalid indices!`);
                } else {
                    let toCut = string.substring(z, x);
                    string = string.replace(toCut, '');
                    console.log(string);
                }
                break;
            case 'Make':
                string = string.toLowerCase();
                if (z === 'Upper') {string = string.toUpperCase()};
                console.log(string);
                break;
            case 'Check':
                if (string.includes(z)) {
                    console.log(`Message contains ${z}`)
                } else {
                    console.log(`Message doesn't contain ${z}`)
                }
                break;
            case 'Sum':
                z = Number(z);
                x = Number(x)+1;
                if (z < 0 || z > string.length - 1 || x <= z || x > string.length) {
                    console.log(`Invalid indices!`);
                } else {
                    let toSum = string.substring(z, x).split('');
                    let sum = 0;
                    for (const iterator of toSum) {
                        sum += iterator.charCodeAt();
                    }
                    console.log(sum);
                }
                break;
        }
    }
}
solve(["HappyNameDay", 
"Replace p r", 
"Make Lower", 
"Cut 2 23", 
"Sum -2 2", 
"Finish"]) 

