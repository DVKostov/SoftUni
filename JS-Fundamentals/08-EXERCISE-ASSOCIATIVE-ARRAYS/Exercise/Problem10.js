function solve(input) {
    class Material {
        constructor(name, qty) {
            this.name = name;
            this.qty = qty;
            this.isKey = name === 'shards' || name === 'fragments' || name === 'motes';
            this.addQty = (qty) => {
                this.qty += qty;
            }
        }
    }
    function check(name, qty) {
        if (qty >= 250) {
            switch (name) {
                case 'shards':
                    return 'Shadowmourne';
                case 'fragments':
                    return 'Valanyr';
                case 'motes':
                    return 'Dragonwrath';
                default:
                    return 'none';
            }
        } else {
            return 'none';
        }
    }
    function compare(a, b) {
        if (a.qty > b.qty) {
            return -1;
        }
        if (a.qty < b.qty) {
            return 1;
        }
        if (a.name.localeCompare(b.name)) {
            return -1;
        }
        if (b.name.localeCompare(a.name)) {
            return 1;
        }
        return 0;
    }
    input = input.split(' ');
    let loot = [];
    loot.push(new Material('shards', 0));
    loot.push(new Material('fragments', 0));
    loot.push(new Material('motes', 0));


    for (let index = 0; index < input.length; index += 2) {
        let material =  input[index + 1].toLowerCase();
        let qty = Number(input[index]);
        let currentMaterial = loot.find(m => m.name === material);
        if (currentMaterial === undefined) {
            loot.push(new Material(material, qty));
        } else {
            currentMaterial.addQty(qty);
        }
        currentMaterial = loot.find(m => m.name === material);
        let result = check(currentMaterial.name, currentMaterial.qty);
        if (result !== 'none') {
            currentMaterial.addQty(-250);
            console.log(`${result} obtained!`);
            break;
        }
    }
    let sortedKeys = loot.filter(k => k.isKey === true).sort(compare);
    let sortedNotKeys = loot.filter(k => k.isKey === false).sort((a, b) => a.name.localeCompare(b.name));
    for (const iterator of sortedKeys) {
        console.log(`${iterator.name}: ${iterator.qty}`)
    }
    for (const iterator of sortedNotKeys) {
        console.log(`${iterator.name}: ${iterator.qty}`)
    }
}
solve(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)