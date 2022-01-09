function validation(array) {
     let x1 = array[0];
     let y1 = array[1];
     let x2 = array[2];
     let y2 = array[3];

     console.log(`{${x1}, ${y1}} to {0, 0} ${distanceisInteger(x1, y1, 0, 0)}`)
     console.log(`{${x2}, ${y2}} to {0, 0} ${distanceisInteger(x2, y2, 0, 0)}`)
     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${distanceisInteger(x1, y1, x2, y2,)}`)

     function distanceisInteger(ix1, iy1, ix2, iy2) {
          let a = ix1 - ix2;
          let b = iy1 - iy2;
          let valid = ''
          if (Number.isInteger(Math.sqrt(a * a + b * b))) {
               valid = 'is valid'
          } else {
               valid = 'is invalid'
          }
          return valid
     }
}


validation([2, 1, 1, 1])
