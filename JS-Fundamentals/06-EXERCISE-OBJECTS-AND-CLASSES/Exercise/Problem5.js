function info(input) {
    class Hero {
        constructor(hero, level, items) {
            this.hero = hero;
            this.level = level;
            this.items = items;
        }
    }

    function compare( a, b ) {
        if ( a.level < b.level ){
          return -1;
        }
        if ( a.level > b.level ){
          return 1;
        }
        return 0;
      }

    let list = [];
    for (let index = 0; index < input.length; index++) {
        let [hero, level, items] = input[index].split(' / ');
        items = items.split(', ');
        list.push(new Hero(hero, Number(level), items.sort()));
    }
    list.sort(compare)
    for (let index = 0; index < list.length; index++) {
        console.log(`Hero: ${list[index].hero}`);
        console.log(`level => ${list[index].level}`);
        console.log(`items => ${list[index].items.join(', ')}`);
    }
    

}
info([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 120 / Desolator, Sentinel, Antara"
    ]
    
)