function solve(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        let [name, level, items] = array[index].split(' / ');
        if (items) {
            items = items.split(', ');
        } else {
            items = [];
        }
        
        newArray.push({
            name,
            level: Number(level),
            items
        });
    }
    return JSON.stringify(newArray);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));