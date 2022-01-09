function shoping(array) {
    let list = array.shift().split('!');

    for (let index = 0; index < array.length; index++) {
        let [command, item, newItem] = array[index].split(' ');
        switch (command) {
            case 'Urgent':
                if (list.indexOf(item) < 0) {
                    list.unshift(item);
                } 
                break;
            case 'Unnecessary':
                if (list.indexOf(item) > -1) {
                    list.splice(list.indexOf(item), 1);
                } 
                break;
            case 'Correct':
                if (list.indexOf(item) > -1) {
                    list[list.indexOf(item)] = newItem;
                } 
                break;
            case 'Rearrange':
                if (list.indexOf(item) > -1) {
                    list.push(item);
                    list.splice(list.indexOf(item), 1);
                } 
                break;
            default:
                break;
        }

    }

    console.log(list.join(', '));

}
shoping([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]
)