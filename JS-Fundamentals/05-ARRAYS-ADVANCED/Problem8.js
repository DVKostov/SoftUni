function manipulation(income) {
     let array = income.shift().split(' ')
     for (let line of income) {
          let [action, first, second] = line.split(' ');
          if (action === 'Add') {
               array.push(first)
          } else if (action === 'Remove') {
               let index = array.indexOf(first);
               if (index !== -1) {
               array.splice(index, 1)
               }
          } else if (action === 'RemoveAt') {
               array.splice(Number(first), 1)
          } else {
               array.splice(Number(second), 0, first)
          }
     }
     return array.map(Number).join(' ')
}
manipulation(['4 19 2 53 6 43',
     'Add 3',
     'Remove 2',
     'RemoveAt 1',
     'Insert 8 3']
)