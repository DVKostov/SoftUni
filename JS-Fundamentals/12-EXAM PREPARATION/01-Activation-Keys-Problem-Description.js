function solve(input) {
    let key = input.shift();
    let find = '';
    let replace = '';
    for (let index = 0; index < input.length; index++) {
        if (input[index] === 'Generate') { 
            console.log(`Your activation key is: ${key}`)
            break; 
        }
        let [action, first, second, third] = input[index].split('>>>');
        switch (action) {
            case 'Contains':
                if (key.includes(first)) {
                    console.log(`${key} contains ${first}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                find = key.substring(second, third);
                replace = find.toLowerCase();
                if (first === 'Upper') {
                    replace = find.toUpperCase();
                }
                key = key.replace(find, replace);
                console.log(key);
                break;
            case 'Slice':
                find = key.substring(first, second);
                key = key.replace(find, '');
                console.log(key);
                break;
        }
    }

}

;
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]
)