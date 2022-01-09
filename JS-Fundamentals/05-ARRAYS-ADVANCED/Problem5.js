function oddPos(array) {
     let newArray = [];
     for (let index = 0; index < array.length; index++) {
          if (index % 2 !== 0) {
               newArray.push(array[index] * 2)
          }  
     }
     console.log(newArray.reverse().join(' '))
}
oddPos([10, 15, 20, 25])