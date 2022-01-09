function equals(array) {
     let coordinates = array.pop().split(' ');
     let damage = 0;
     let kills = 0;
     let hangar = [];

     for (let index = 0; index < array.length; index++) {
          hangar.push(array[index].split(' ').map(Number))  
     }
     for (let index = 0; index < coordinates.length; index++) {
          let [row, column] = coordinates[index].split(',').map(Number);
          let points = hangar[row][column];
          hangar[row][column] = 0;
          damage += points;
          kills++;
          
          for (let indexRow = row - 1; indexRow <= row + 1; indexRow++) {
               for (let indexCol = column - 1; indexCol <= column + 1; indexCol++) {
                    if (indexRow > -1 && indexRow <= hangar.length && indexCol > -1 && indexCol <= hangar[0].length) {
                         if (hangar[indexRow][indexCol] - points < 0) {
                              hangar[indexRow][indexCol] = 0;
                         } else {
                              hangar[indexRow][indexCol] = hangar[indexRow][indexCol] - points;
                         }
                    }
               }  
          }
     }
     for (let indexRow = 0; indexRow < hangar.length; indexRow++) {
          for (let indexCol = 0; indexCol < array[0].length; indexCol++) {
               if (hangar[indexRow][indexCol] > 0) {
                    damage += hangar[indexRow][indexCol];
                    kills++;
               }
          } 
     }
     console.log(damage)
     console.log(kills)

}
equals(['10 10 10',
'10 10 10', 
'10 10 10',
'0,0']

)