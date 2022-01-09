function loadingBar(num) {
     let array = ['.','.','.','.','.','.','.','.','.','.'];
     for (let index = 0; index < (num / 10); index++) {
               array[index] = '%'
     }
     if (num === 100) {
          console.log(`100% Complete!`);
          console.log(`[${array.join('')}]`)
     } else {
          console.log(`${num}% [${array.join('')}]`);
          console.log('Still loading...')
     }
}
loadingBar(50)