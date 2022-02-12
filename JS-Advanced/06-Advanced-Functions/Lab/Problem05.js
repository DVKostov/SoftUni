let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

function solution() {
    let result = '';

    return {
        append (string) {
            result += string
        },
        removeStart (n) {
            result = result.substring(n);
        },
        removeEnd (n) {
            result = result.substring(0, result.length - n);
        },
        print () {
            console.log(result);
        }
    }
}

// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console
