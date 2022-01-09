function wall(wall) {
     let cubic = [];
     let sum = 0;
     while (true) {
          wall = wall.filter(section => section < 30);
          sections = wall.length;
          if (sections === 0) {
               break;
          }
          cubic.push(sections * 195);
          sum += (sections * 195 * 1900)
          wall = wall.map(sections => sections + 1);
     }
     console.log(cubic.join(', '))
     console.log(`${sum} pesos`)

}
wall([17, 22, 17, 19, 17])