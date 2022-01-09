function newArray(array) {
    let newArray = [];
    array.forEach(element => {
         if (element < 0) {
              newArray.unshift(element);
         } else {
              newArray.push(element)
         }
    });
    newArray.forEach(element => console.log(element))
}
newArray([7, -2, 8, 9])