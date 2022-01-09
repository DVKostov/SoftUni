function manipulator(array, commands) {
     for (let index = 0; index < commands.length; index++) {
          let line = commands[index].split(' ');
          switch (line[0]) {
               case 'add':
                    array.splice(Number(line[1]), 0, Number(line[2]));
                    break;
               case 'addMany':
                    let statIndex = Number(line[1]);
                    for (let manyIndex = 2; manyIndex < line.length; manyIndex++) {
                         array.splice(statIndex, 0, Number(line[manyIndex]));
                         statIndex++;
                    }
                    break;
               case 'contains':
                    console.log(array.indexOf(Number(line[1])));
                    break;
               case 'remove':
                    array.splice(Number(line[1]), 1)
                    break;
               case 'shift':
                    for (let secondInnerIndex = 1; secondInnerIndex <= Number(line[1]); secondInnerIndex++) {
                         array.push(array.shift())
                    }
                    break;
               case 'sumPairs':
                    let newArray = [];
                    for (let thirdInnerIndex = 0; thirdInnerIndex < array.length; thirdInnerIndex += 2) {
                         let next = 0;
                         if (array[thirdInnerIndex + 1]) {
                              next = array[thirdInnerIndex + 1]
                         }
                         newArray.push(array[thirdInnerIndex] + next)
                    }
                    array = newArray
                    break;
               case 'print':
                    console.log(`[ ${array.join(', ')} ]`)
                    break;
          }
          if (line[0] === 'print') {
               break;
          }
     }
}
manipulator([1, 2, 4, 5, 6, 7],
     ["sumPairs", "print"]
     
)