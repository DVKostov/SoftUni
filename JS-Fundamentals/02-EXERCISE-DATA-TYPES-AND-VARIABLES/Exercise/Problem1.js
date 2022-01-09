function Problem(n) {
    let toText = n.toString();
    let sum = 0;
    for (let index = 0; index < toText.length; index++) {
        sum += Number(toText[index]);

    }
    console.log(sum)
}
Problem(245678)