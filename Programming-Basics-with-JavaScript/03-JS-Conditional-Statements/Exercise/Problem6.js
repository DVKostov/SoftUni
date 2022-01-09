function Problem6 (budget, guyscount, clothsingleprice) {
    budget = Number(budget);
    guyscount = Number(guyscount);
    clothsingleprice = Number(clothsingleprice);

    let decor = budget * 0.1;
    let clothsum = 0;

    if (guyscount > 150) {
        clothsum = (guyscount * clothsingleprice) * 0.9;
    }else {
        clothsum = guyscount * clothsingleprice;
    }

    let total = decor + clothsum;

    if (budget < total) {
        let diff = total - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }else {
        let diff = budget - total;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }


}
Problem6(15437.62, 186, 57.99)