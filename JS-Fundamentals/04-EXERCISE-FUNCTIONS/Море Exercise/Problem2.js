function mod(num) {
     let array = String(num).split('')
     while (true) {
          if (avg(array) > 5) {
               break;
          } else {
               array.push('9')
          }
     }
     console.log(Number(array.join('')))
     
     function avg (avgArray) {
          let sum = 0;
          for (let index = 0; index < avgArray.length; index++) {
               sum += Number(avgArray[index])             
          }
          return sum / avgArray.length
     }
}
mod(101)