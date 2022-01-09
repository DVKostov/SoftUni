function solve(input) {
    class Person {
        constructor(name) {
            this.name = name;
            this.likes = 0;
            this.comments = 0;
            this.sum = 0;
            this.setSum = () => {
                this.sum = this.likes + this.comments;
            }
        }
    }
    let list = [];
    for (const iterator of input) {
        if (iterator === 'Log out') { break; }
        let [command, name, x] = iterator.split(': ');
        let current = list.find(p => p.name === name);
        if (current === undefined && command !== 'Blocked') { list.push(new Person(name)) };
        current = list.find(p => p.name === name);
        switch (command) {
            case 'Like':
                current.likes += Number(x);
                break;
            case 'Comment':
                current.comments++
                break;
            case 'Blocked':
                if (current === undefined) {
                    console.log(`${name} doesn't exist.`)
                } else {
                    list.splice(list.indexOf(current), 1);
                }
                break;
        }
    }
    list.map(a => a.setSum());
    let sorted = list.sort((a, b) => b.sum - a.sum || a.name.localeCompare(b.name));
    console.log(`${sorted.length} followers`)
    for (const iterator of sorted) {
        console.log(`${iterator.name}: ${iterator.sum}`)
    }

}
solve(["Like: A: 3",
"Comment: A",
"New follower: B",
"Blocked: A",
"Comment: B",
"Like: C: 5",
"Like: D: 5",
"Log out"])
