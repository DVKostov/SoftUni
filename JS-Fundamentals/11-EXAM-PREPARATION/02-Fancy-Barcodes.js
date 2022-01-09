function solve (input) {
    let patter = /^[@][#]{1,}[A-Z][a-zA-Z0-9]{4,}[A-Z][@][#]{1,}$/g
    let barcodes = Number(input.shift());
    for (let index = 0; index < barcodes; index++) {
        if (input[index].match(patter) === null) {
            console.log('Invalid barcode')
        } else {
            let productGrp = '';
            for (const iterator of input[index]) {
                if (Number.isInteger(Number(iterator))) {
                    productGrp = productGrp + iterator;
                }
            }
            if (productGrp === '') {
                productGrp = '00';
            }
            console.log(`Product group: ${productGrp}`)
        }
    }
}
solve([ '6', '@###Val1d1teM@###', '@#ValidIteM@#' ,'##InvaliDiteM##', '@InvalidIteM@', '@#Invalid_IteM@#', '@#ValiditeM@#'])