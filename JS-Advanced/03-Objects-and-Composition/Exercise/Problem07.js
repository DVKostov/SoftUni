function solve(array) {
    let newArray = [];
    for (let index = 1; index < array.length; index++) {
        let row = array[index].split('|');
        let Town = row[1].trim();
        let Latitude = Number(row[2].trim()).toFixed(2);
        let Longitude = Number(row[3].trim()).toFixed(2);
        Latitude = Number(Latitude);
        Longitude = Number(Longitude);
        newArray.push({Town, Latitude, Longitude})
    }
    return JSON.stringify(newArray)
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));