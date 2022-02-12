function solve(strings) {
    let result = [];
    let log = [];

    let processor = {
        create(name, inherit, parentName) {
            result.push({ name, 'prop': {} });
            if (inherit) {
                this.inherit(name, parentName);
            }
        },
        inherit(name, parentName) {
            let el = result.filter(e => e.name === name)[0];
            el.parentName = parentName;
        },
        set(name, key, value) {
            let el = result.filter(e => e.name === name)[0];
            el.prop[key] = value;
        },
        print(name) {
            let el = result.filter(e => e.name === name)[0];
            let entries = Object.entries(el.prop);
            for (const entrie of entries) {
                log.push(`${entrie[0]}:${entrie[1]}`);
            }
            let Pel = result.filter(e => e.name === el.parentName)[0];
            if (Pel !== undefined) {
                this.print(Pel.name)
            } else {
                console.log(log.join(','));
                log = [];
            }

        }
    }


    for (const string of strings) {
        let [command, x, y, z] = string.split(' ');
        processor[command](x, y, z);
    }


}

solve(
    [
        'create pesho',
        'create gosho inherit pesho',
        'create stamat inherit gosho',
        'set pesho rank number1',
        'set gosho nick goshko',
        'print stamat'
    ]
);

solve(
    [
        'create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2'
    ]
)

//•	create <name> - creates an object with the supplied <name>
//•	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
//•	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
//•	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.
