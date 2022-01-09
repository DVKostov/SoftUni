function Palindrome(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === Number(String(array[index]).split('').reverse().join(''))) {
            console.log('true');
        } else {
            console.log('false');
        }
        
    }

}
Palindrome([123,323,421,121])