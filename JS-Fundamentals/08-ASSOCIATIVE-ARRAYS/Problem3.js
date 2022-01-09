function solve(input) {
    let address = {};
    for (const line of input) {
        let [name, addres] = line.split(':');
        address[name] = addres
    }
    let sortAddress = Object.entries(address)
    sortAddress.sort((a, b) => a[0].localeCompare(b[0]));
    for (const line of sortAddress) {
        console.log(`${line[0]} -> ${line[1]}`)
            
    }
    
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']

)