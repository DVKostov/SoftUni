function Problem3 (x, y, z, people) {
    x = Number(x);
    y = Number(y);
    z = Number(z);
    people = Number(people);

    let totKG = (x * y) * 0.4;
    let totWine = totKG / 2.5;
    let diff = Math.abs(z - totWine);
    let perPerson = diff / people;

    if (z <= totWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totWine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(perPerson)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    }


}
Problem3(650, 2, 175, 3)