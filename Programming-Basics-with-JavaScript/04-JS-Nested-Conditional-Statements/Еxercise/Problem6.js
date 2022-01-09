function Problem6 (budget, season) {
    budget = Number(budget);
    let distination = ''
    let place = ''
    let total = 0


    if (budget <= 100) {
        distination = 'Bulgaria';
        switch (season) {
            case 'summer':
                total = budget * 0.3;
                place = 'Camp';
                break;
            default:
                total = budget * 0.7;
                place = 'Hotel';
                break;
        }
    } else if (budget <= 1000) {
        distination = 'Balkans';
        switch (season) {
            case 'summer':
                total = budget * 0.4;
                place = 'Camp';
                break;
            default:
                total = budget * 0.8;
                place = 'Hotel';
                break;
        }
    } else {
        distination = 'Europe';
        total = budget * 0.9;
        place = 'Hotel';
    }

    console.log(`Somewhere in ${distination}`);
    console.log(`${place} - ${total.toFixed(2)}`)


}
Problem6 (50, 'summer');
Problem6 (75, 'winter');
Problem6 (312, 'summer');
Problem6 (678.53, 'winter');
Problem6 (1500, 'summer');