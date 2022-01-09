function solve(input) {
    class Hero {
        constructor(name, hp, mp) {
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);
            this.castSpell = (points, spell) => {
                points = Number(points);
                if (this.mp - points >= 0) {
                    this.mp -= points;
                    return `${this.name} has successfully cast ${spell} and now has ${this.mp} MP!`
                }
                return `${this.name} does not have enough MP to cast ${spell}!`
            }
            this.takeDamage = (points, attacker) => {
                points = Number(points);
                if (this.hp - points > 0) {
                    this.hp -= points;
                    return `${this.name} was hit for ${points} HP by ${attacker} and now has ${this.hp} HP left!`
                }
                dead(this.name);
                return `${this.name} has been killed by ${attacker}!`;
            }
            this.recharge = (points) => {
                points = Number(points);
                if (this.mp + points > 200) {
                    let recharged = 200 - this.mp
                    this.mp = 200;
                    return `${this.name} recharged for ${recharged} MP!`
                }
                this.mp += points;
                return `${this.name} recharged for ${points} MP!`
            }
            this.heal = (points) => {
                points = Number(points);
                if (this.hp + points > 100) {
                    let recharged = 100 - this.hp
                    this.hp = 100;
                    return `${this.name} healed for ${recharged} HP!`
                }
                this.hp += points;
                return `${this.name} healed for ${points} HP!`
            }
        }
    }
    function dead(name) {
        let hero = heroes.find(h => h.name === name);
        heroes.splice(heroes.indexOf(hero), 1);
    }

    let heroes = [];
    let heroesCount = Number(input.shift());
    for (let index = 0; index < heroesCount; index++) {
        let [name, hp, mp] = input.shift().split(' ')
        heroes.push(new Hero(name, hp, mp));
    }
    for (const iterator of input) {
        let [action, name, points, str] = iterator.split(' - ');
        if (action === 'End') { break; }
        let hero = heroes.find(h => h.name === name)
        switch (action) {
            case 'CastSpell':
                console.log(hero.castSpell(points,str));
                break;
            case 'TakeDamage':
                console.log(hero.takeDamage(points,str));
                break;
            case 'Recharge':
                console.log(hero.recharge(points));
                break;
            case 'Heal':
                console.log(hero.heal(points));
                break;
        }
    }
    let sortedHeroes = heroes.sort((a, b) => b.hp - a.hp || a.name.localeCompare(b.name));
    for (const iterator of sortedHeroes) {
        console.log(iterator.name);
        console.log(`  HP: ${iterator.hp}`);
        console.log(`  MP: ${iterator.mp}`);
    }
}
solve([
    '2',
    'AAA 85 120',
    'BBB 99 50',
    'Heal - AAA - 10',
    'Recharge - AAA - 50',
    'TakeDamage - BBB - 66 - Orc',
    'CastSpell - BBB - 15 - ViewEarth',
    'Heal - BBB - 62',
    'End'
]
)