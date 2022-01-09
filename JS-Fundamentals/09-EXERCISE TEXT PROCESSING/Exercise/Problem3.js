function solve(input) {
    input = input.split('\\');
    let file = input[input.length-1];
    file = file.split('.');
    let extension = file.splice(file.length-1,1);
    let name = file.join('.');
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}





solve('C:\\Internal\\training-internal\\Template.pptxx.pptx'
)