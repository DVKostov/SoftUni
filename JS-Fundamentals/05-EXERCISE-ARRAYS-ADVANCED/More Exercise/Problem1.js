function equals(array) {
     let count = 0;
     let current = '';
     for (let right = 0; right < array[0].length; right++) {
          for (let down = 0; down < array.length; down++) {
               if (array[down][right] === current) {
                    current = '';
                    count++;
               } else {
                    current = array[down][right]
               }
               
          }
          current = '';
     }
     current = '';
     for (let right = 0; right < array.length; right++) {
          for (let down = 0; down < array[0].length; down++) {
               if (array[right][down] === current) {
                    current = '';
                    count++;
               } else {
                    current = array[right][down]
               }
               
          }
          current = '';
     }






     console.log(count)
}
equals([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)