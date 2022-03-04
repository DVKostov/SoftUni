(function solve() {
    String.prototype.ensureStart = function (str) {
        let result = `${this}`;
        if (str !== this.substring(0, str.length)) {
            result = str + this;
        }
        return result;
    }
    String.prototype.ensureEnd = function (str) {
        let result = `${this}`;
        if (str !== this.substring(this.length - str.length, this.length)) {
            result = this + str;
        }
        return result;
    }
    String.prototype.isEmpty = function () {
        let result = false;
        if (this.length === 0) {
            result = true;
        };
        return result;
    }
    String.prototype.truncate = function (n) {
        if (this.length <= n || this.length === 0) {
            return `${this}`;
        };
        if (n < 4) {
            return `${'.'.repeat(n)}`
        };

        let array = this.split(' ');

        let loop = true;
        let result = '';
        while (loop) {
            if (array.length === 1) {
                result = `${array[0].substring(0, n - 3)}...`
                loop = false;
                break;
            }

            array.length = array.length - 1
            result = array.join(' ') + '...'

            if (result.length <= n) {
                loop = false;
            }
        }
        return result
    }

    String.format = function (string, ...params) {
        let result = string;
        for (let index = 0; index < params.length; index++) {
            result = result.replace(`{${index}}`, params[index]);
        }
        return result;
    }

}
)();

//let str = 'my string';
//console.log(str = str.ensureStart('my'));
//console.log(str = str.ensureStart('hello '));
//console.log(str.truncate(4));

//str = str.truncate(16);
//str = str.truncate(14);
//str = str.truncate(8);
//str = str.truncate(4);
//str = str.truncate(2);
str = String.format('The {0} {1} fox {2}',
    'quick', 'brown', 'again');
//str = String.format('jumps {0} {1}',
//  'dog');

console.log(str);