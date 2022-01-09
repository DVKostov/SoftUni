function convert (str) {
    let obj = JSON.parse(str);
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for (let index = 0; index < keys.length; index++) {
        console.log(`${keys[index]}: ${values[index]}`);
        
    }
}

convert ('{"name": "George", "age": 40, "town": "Sofia"}'

)