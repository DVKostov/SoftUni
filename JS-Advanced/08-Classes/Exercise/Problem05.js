class Stringer {
    constructor (innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }
    toString () {
        let string = this.innerString;
        let length = this.innerLength
        if (string.length > length) {
            string = `${string.substring(0, length)}...`
        }
        return string;
    }
    decrease (value) {
        this.innerLength -= value;
        if (this.innerLength < 0) { this.innerLength = 0 }
    }
    increase (value) {
        this.innerLength += value;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
