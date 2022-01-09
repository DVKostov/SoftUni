function solve(input) {
    let array = [];
    let start = 0;
    for (let index = 1; index < input.length; index++) {
        let letter =  input[index].charCodeAt();
        if (letter > 64 && letter < 91) {
            array.push(input.substring(start,index));
            start = index;
        }
        if (input[index + 1] === undefined) {
            array.push(input.substring(start,index + 1));
        }
    }
    console.log(array.join(', '));
    
}





solve('SplitMeIf'
)