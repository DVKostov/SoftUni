class List {
    constructor() {
        this.array = [];
        this.size = 0
    }
    add(element) {
        this.array.push(element);
        this.array = this.array.sort((a, b) => a - b);
        this.size = this.array.length;
        return this
    }
    remove(index) {
        if (typeof index === 'number' && index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.array = this.array.sort((a, b) => a - b);
            this.size = this.array.length;
        }
        return this
    }
    get(index) {
        if (typeof index === 'number' && index >= 0 && index < this.array.length) {
            return this.array[index];
        }
    }
}

let list = new List();
list.add(2);
list.add(1);
list.add(3);
console.log(list.get(0));
console.log(list.size);