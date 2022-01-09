function Problem2(animal) {
    let animalclass = ''
    switch (animal) {
        case 'dog':
            animalclass = 'mammal';
            break;
        case 'crocodile':
            animalclass = 'reptile';
            break;
        case 'tortoise':
            animalclass = 'reptile';
            break;
        case 'snake':
            animalclass = 'reptile';
            break;
        default:
            animalclass = 'unknown'
            break;
    }
    console.log(animalclass);

}
Problem2('snake')