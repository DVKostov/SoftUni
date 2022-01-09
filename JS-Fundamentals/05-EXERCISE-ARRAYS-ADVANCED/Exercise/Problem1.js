function train(income) {
     let array = income.shift().split(' ').map(Number);
     let max = Number(income.shift())
     for (let item of income) {
          let [first, second] = item.split(' ');
          if (second) {
               array.push(Number(second));
          } else {
               let passagers = Number(first);
               for (let wagon = 0; wagon < array.length; wagon++) {
                    if (max - array[wagon] >= passagers) {
                         array[wagon] += passagers;
                         break;
                    }
                    
               }
          }
     }
     console.log(array.join(' '))
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)