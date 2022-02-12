function solve(strings) {
    let result = [];
    let processor = {
        add(text) {
            result.push(text);
        },
        remove(text) {
            result = result.filter(e => e !== text);
        },
        print() {
            console.log(result.join(','));
        }
    }
    for (const string of strings) {
        let [command, text] = string.split(' ');
        processor[command](text);
    }


}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
