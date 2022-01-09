function listProducts(array) {
     array.sort();
     for (let index = 0; index < array.length; index++) {
          array[index] = `${index + 1}.${array[index]}`
          console.log(array[index])
     }
}
listProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])