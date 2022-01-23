function solve() {
    return {
        mage(name) {
            this.name = name;
            this.health = 100;
            this.mana = 100;
            this.cast = function cast (spell) {
                this.mana--;
                console.log(`${this.name} cast ${spell}`);
            }
            return this
        },
        fighter(name) {
            this.name = name;
            this.health = 100;
            this.stamina = 100;
            this.fight = function fight () {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
            return this
        }
    }
}




let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

