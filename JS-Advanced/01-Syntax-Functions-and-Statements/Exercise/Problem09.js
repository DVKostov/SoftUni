function solve(string) {
    string = string.toUpperCase()
    var words = string.match(/\w+/gm)
    console.log(words.join(', '));
};

solve('Hi, how are you?');