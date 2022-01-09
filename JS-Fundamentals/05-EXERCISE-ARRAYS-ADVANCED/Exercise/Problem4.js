function forSort(array) {
     array.sort((a, b) => a - b);
     let newArray = [];
     let iterations = array.length
     for (let index = 0; index < iterations; index++) {
          if (index % 2 === 0) {
               newArray.push(array.reverse().shift())
          } else {
               newArray.push(array.reverse().shift())
          }
     }
     console.log(newArray.join(' '))
}
forSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])