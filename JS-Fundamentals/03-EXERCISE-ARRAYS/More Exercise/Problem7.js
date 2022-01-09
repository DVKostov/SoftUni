function Problem(n1, n2) {
    let max = n1 * n2;
    let currrent = 1;
    let array = [];
    let rightIndex = n1 - 1;
    let leftIndex = 0;
    let topIndex = 0;
    let bottomIndex = n1 - 1;

    for (let index = 0; index < n1; index++) {
        array.push([])
    }

    while (currrent <= max) {
        for (let iteration = 0; iteration < 4; iteration++) {
            switch (iteration) {
                case 0:
                    for (let top = 0; top < n1; top++) {
                        if (!array[topIndex][top]) {
                            array[topIndex][top] = currrent;
                            currrent += 1;
                        }
                    }
                    topIndex += 1;
                    break;
                case 1:
                    for (let right = 0; right < n1; right++) {
                        if (!array[right][rightIndex]) {
                            array[right][rightIndex] = currrent;
                            currrent += 1;
                        }
                    }
                    rightIndex -= 1;
                    break;
                case 2:
                    for (let bottom = n1 - 1; bottom >= 0; bottom--) {
                        if (!array[bottomIndex][bottom]) {
                            array[bottomIndex][bottom] = currrent;
                            currrent += 1;
                        }
                    }
                    bottomIndex -= 1;
                    break;
                case 3:
                    for (let left = n1 - 1; left >= 0; left--) {
                        if (!array[left][leftIndex]) {
                            array[left][leftIndex] = currrent;
                            currrent += 1;
                        }
                    }
                    leftIndex += 1;
                    break;
            }
        }
    }
    for (let index = 0; index < array.length; index++) {
        console.log(array[index].join(' '))
        
    }
}
Problem(10, 10)




