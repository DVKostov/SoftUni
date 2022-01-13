function solve(first, second, third) {
    let number;
    if (first > second && first > third) {
        number = first;
    } else if (second > third) {
        number = second;
    } else {
        number = third;
    };
    console.log(`The largest number is ${number}.`);
};

solve(5, -3, 16);