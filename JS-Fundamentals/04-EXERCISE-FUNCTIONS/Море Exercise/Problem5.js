function printDNA(num) {
     let dnaChars = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
     let lines = ['**XX**', '*X--X*', 'X----X', '*X--X*'];
     let lineIndex = 0;
     let char = 0;
     for (let index = 0; index < num; index++) {
          let lineArray = lines[lineIndex].split('')
          for (let innerIndex = 0; innerIndex < lineArray.length; innerIndex++) {
               if (lineArray[innerIndex] === 'X') {
                    lineArray[innerIndex] = dnaChars[char];
                    if (char + 1 > dnaChars.length - 1) {
                         char = 0;
                    } else {
                         char++;
                    }
               }
          }
          console.log(lineArray.join(''));
          if (lineIndex + 1 > lines.length - 1) {
               lineIndex = 0;
          } else {
               lineIndex++;
          }
     }


}

printDNA(10)