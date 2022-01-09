function search(array, numbers) {
     let [elementsToTake, elementsToDelete, elementToSearch] = numbers;
     array = array.slice(0, elementsToTake).splice(elementsToDelete);
     let count = 0;
     for (let index = 0; index < array.length; index++) {
          if (array[index] === elementToSearch) {
               count++
          }
          
     }
     console.log(`Number ${elementToSearch} occurs ${count} times.`)
}
search([5, 2, 3, 4, 1, 6],
     [5, 2, 3]
     )