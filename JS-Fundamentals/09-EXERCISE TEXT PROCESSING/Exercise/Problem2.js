function solve(input) {
    input = input.split(' ');
    for (const iterator of input) {
        if (iterator[0] === '#' && isLatter(iterator)) {
            console.log(iterator.substring(1, iterator.length))
        }
    }
    function isLatter(word) {
        if (word.length < 2) { return false }
        word = word.substring(1, word.le)
        for (const iterator of word) {
            let char = iterator.charCodeAt();
            if (char < 65 || char > 122) { return false };
        }
        return true
    }
}





solve('Nowadays everyone uses # to tag a #special word in #socialMedia'
)