function boomers(array, boom) {
     while (array.includes(boom[0])) {

          let startIndex = array.indexOf(boom[0]) - boom[1];
          let endIndex = boom[1] * 2 + 1;
          if (startIndex < 0) {
               startIndex = 0;
          }
          array.splice(startIndex, endIndex)

     }
     let sum = 0;
     for (let index = 0; index < array.length; index++) {
          sum += array[index]
          
     }
     console.log(sum)
}
boomers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
     [2, 1]

)