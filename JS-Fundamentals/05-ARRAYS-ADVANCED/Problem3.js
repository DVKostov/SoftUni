function firstKlastK(array) {
     let k = array.shift();
     console.log(array.slice(0, k).join(' '))
     console.log(array.reverse().slice(0, k).reverse().join(' '))
}
firstKlastK([2, 
     7, 8, 9]
     )