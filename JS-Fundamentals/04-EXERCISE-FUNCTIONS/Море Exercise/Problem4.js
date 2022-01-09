function radioCrystals(array) {
     let target = array[0];
     let operations = ['Cut', 'Lap', 'Grind', 'Etch']
     for (let index = 1; index < array.length; index++) {
          let current = array[index];
          console.log(`Processing chunk ${current} microns`)
          for (let action = 0; action < operations.length; action++) {
               let actionCount = 0;
               switch (operations[action]) {
                    case 'Cut':
                         while (true) {
                              if (target <= cut(current) || target <= cut(current) + 1) {
                                   current = cut(current);
                                   actionCount++;
                              } else {
                                   if (actionCount > 0) {
                                        current = transportingAndWashing(current);
                                        console.log(`Cut x${actionCount}`);
                                        console.log(`Transporting and washing`);
                                   }
                                   break;
                              }
                         }

                         break;
                    case 'Lap':
                         while (true) {
                              if (target <= lap(current) || target <= lap(current) + 1) {
                                   current = lap(current);
                                   actionCount++;
                              } else {
                                   if (actionCount > 0) {
                                        current = transportingAndWashing(current);
                                        console.log(`Lap x${actionCount}`);
                                        console.log(`Transporting and washing`);
                                   }
                                   break;
                              }
                         }
                         break;
                    case 'Grind':
                         while (true) {
                              if (target <= grind(current) || target <= grind(current) + 1) {
                                   current = grind(current);
                                   actionCount++;
                              } else {
                                   if (actionCount > 0) {
                                        current = transportingAndWashing(current);
                                        console.log(`Grind x${actionCount}`);
                                        console.log(`Transporting and washing`);
                                   }
                                   break;
                              }
                         }
                         break;
                    case 'Etch':
                         while (true) {
                              if (target <= etch(current) || target <= etch(current) + 1) {
                                   current = etch(current);
                                   actionCount++;
                              } else {
                                   if (actionCount > 0) {
                                        current = transportingAndWashing(current);
                                        console.log(`Etch x${actionCount}`);
                                        console.log(`Transporting and washing`);
                                   }
                                   break;
                              }
                         }
                         break;
               }
               let check = equal(current, target);
               if (check === 0) {
                    console.log(`Finished crystal ${current} microns`);
                    break;
               } else if (check === 1) {
                    current = xray(current);
                    console.log(`X-ray x1`);
                    console.log(`Finished crystal ${current} microns`);
                    break;
               }
          }
     }


     function equal(cur, tar) {
          let result = 2;
          if (cur === tar) {
               result = 0;
          } else if (cur + 1 === tar) {
               result = 1;
          }
          return result
     }
     function cut(n) { return n / 4 };
     function lap(n) { return n - (n * 0.2) };
     function grind(n) { return n - 20 };
     function etch(n) { return n - 2 };
     function xray(n) { return n + 1 };
     function transportingAndWashing(n) { return Math.floor(n) };
}

radioCrystals([1000,
     4000,
     8100])