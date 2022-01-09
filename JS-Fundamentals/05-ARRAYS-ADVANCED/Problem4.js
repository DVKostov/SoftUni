function sumlastK(n, k) {
     let array = [1];
     for (let index = 1; index < n; index++) {
          let sum = 0;
          for (let innerIndex = 1; innerIndex <= k; innerIndex++) {
               if (index - innerIndex >= 0) {
                    sum += array[index - innerIndex]
               }

          }
          array.push(sum)
     }
     console.log(array.join(' '))
}
sumlastK(6, 3)