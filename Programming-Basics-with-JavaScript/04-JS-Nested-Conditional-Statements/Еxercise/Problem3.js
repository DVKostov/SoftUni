function Problem3 (degrees, partOfDay) {
    degrees = Number(degrees);
    let Outfit = '';
    let Shoes = '';

    if (degrees >= 10 && degrees <= 18) {
        switch (partOfDay) {
            case 'Morning':
                Outfit = 'Sweatshirt';
                Shoes = 'Sneakers';
                break;
            case 'Afternoon':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
            case 'Evening':
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (partOfDay) {
            case 'Morning':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
            case 'Afternoon':
                Outfit = 'T-Shirt';
                Shoes = 'Sandals';
                break;
            case 'Evening':
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
                break;
        }
    } else if (degrees >= 25) {
        switch (partOfDay) {
            case 'Morning':
                Outfit = 'T-Shirt';
                Shoes = 'Sandals';
                break;
            case 'Afternoon':
                Outfit = 'Swim Suit';
                Shoes = 'Barefoot';
                break;
            case 'Evening':
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`) 
}
Problem3(22, 'Afternoon');