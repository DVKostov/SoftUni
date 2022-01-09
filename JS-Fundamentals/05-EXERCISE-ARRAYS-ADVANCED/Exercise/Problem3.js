function guests(array) {
     let list = [];
     for (let index = 0; index < array.length; index++) {
          let [guest, first, second, third] = array[index].split(' ')
          if (third) {
               if (list.includes(guest)) {
                    list.splice(list.indexOf(guest), 1)
               } else {
                    console.log(`${guest} is not in the list!`)
               }
          } else {
               if (list.includes(guest)) {
                    console.log(`${guest} is already in the list!`)
               } else {
                    list.push(guest)
               }
          }
     }
     console.log(list.join('\n'))
}
guests(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)