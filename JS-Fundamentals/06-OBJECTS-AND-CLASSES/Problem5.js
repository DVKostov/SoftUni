function cats (array) {
    let cats = [];
    class Cat {
        constructor (name, age) {
            this.meow = () => {
                console.log(`${name}, age ${age} says Meow`);
            }
        }
    }
    for (let index = 0; index < array.length; index++) {
        let [name, age] = array[index].split(' ');
        cats.push(new Cat(name, age));
    }
    for (let index = 0; index < cats.length; index++) {
        cats[index].meow(); 
    }

}

cats (['Mellow 2', 'Tom 5']
)