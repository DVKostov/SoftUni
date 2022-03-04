(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function (num) {
        return this.slice(num);
    }
    
    Array.prototype.take = function (num) {
        return this.slice(0, num);
    }
    
    Array.prototype.sum = function () {
    
        let sum = 0;
    
        for (let index = 0; index < this.length; index++) {
            sum += this[index];
            
        }
    
        return sum;
    }
    
    Array.prototype.average = function () {
    
        let sum = 0;
    
        for (let index = 0; index < this.length; index++) {
            sum += this[index];
            
        }
    
        return sum / this.length;
    }
}
)();













let a = [1, 2, 3]

console.log(a.average())

