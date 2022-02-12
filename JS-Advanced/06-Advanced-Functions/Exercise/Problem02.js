function solve(...input) {
    let counters = [];
    let array = [];
    
    function add(type, value) {
        if (type === 'function') { value = String(value) }
        let find = counters.filter(e => e.type === type)[0];
        if (find) {
            find.count += 1
        } else {
            counters.push({type, count: 1})
        }
        
        array.push({type, value})
    }


    for (let index = 0; index < input.length; index++) {
        let type = typeof(input[index]);
        let value = input[index];  
        add(type, value);
    }

    for (let index = 0; index < array.length; index++) {
        console.log(`${array[index].type}: ${array[index].value}`);
    }

    counters = counters.sort((a, b) => b.count - a.count);

    for (let index = 0; index < counters.length; index++) {
        console.log(`${counters[index].type} = ${counters[index].count}`);
        
    }

}

solve({ name: 'bob'}, 3.333, 9.999);