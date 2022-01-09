function inventory(array) {
     let inventory = array.shift().split(' ');
     for (let index = 0; index < array.length; index++) {
          let [command, item] = array[index].split(' ');
          switch (command) {
               case 'Buy':
                    if (inventory.indexOf(item) < 0) {
                         inventory.push(item);
                    }
                    break;
               case 'Trash':
                    if (inventory.indexOf(item) > -1) {
                         inventory.splice(inventory.indexOf(item), 1);
                    }
                    break;
               case 'Repair':
                    if (inventory.indexOf(item) > -1) {
                         inventory.splice(inventory.indexOf(item), 1);
                         inventory.push(item);
                    }
                    break;
               case 'Upgrade':
                    let [upItem, upgrade] = item.split('-');
                    if (inventory.indexOf(upItem) > -1) {
                         inventory.splice(inventory.indexOf(upItem) + 1, 0, `${upItem}:${upgrade}`);
                    }
                    break;
          }
     }
     console.log(inventory.join(' '))
}
inventory(['SWORD Shield Spear',
     'Buy Bag',
     'Trash Shield',
     'Repair Spear',
     'Upgrade SWORD-Steel']

)