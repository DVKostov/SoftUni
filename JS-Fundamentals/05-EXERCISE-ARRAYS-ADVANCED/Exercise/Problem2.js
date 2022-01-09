function distinct(array) {
     for (let index = array.length - 1; index > -1; index--) {
          if (array.slice(0, index).includes(array[index]) && index > 0) {
               array.splice(index, 1);
               index = array.length;
          }
     }
     return array.join(' ')
}
console.log(distinct([20, 8, 12, 13, 4, 4, 8, 5]))