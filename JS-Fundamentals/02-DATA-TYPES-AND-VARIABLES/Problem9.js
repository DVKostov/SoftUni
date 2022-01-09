function Problem9 (n) {
    for (let indexOne = 0; indexOne < n; indexOne++) {
        let letterOne = String.fromCharCode(97 + indexOne);
        for (let indexTwo = 0; indexTwo < n; indexTwo++) {
            let letterTwo = String.fromCharCode(97 + indexTwo);
            for (let indexThree = 0; indexThree < n; indexThree++) {
                let letterThree = String.fromCharCode(97 + indexThree);
                console.log(letterOne + letterTwo + letterThree)
                
            }
        }
        
    }
}
Problem9 (5)