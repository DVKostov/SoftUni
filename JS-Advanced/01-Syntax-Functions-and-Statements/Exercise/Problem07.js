function solve(param1, param2, param3, param4, param5, param6) {

    num = Number(param1);
    num = action(num, param2);
    console.log(num);
    num = action(num, param3);
    console.log(num);
    num = action(num, param4);
    console.log(num);
    num = action(num, param5);
    console.log(num);
    num = action(num, param6);
    console.log(num);

    function action(num, param) {
        switch (param) {
            case 'chop':
                return num / 2;
            case 'dice':
                return Math.sqrt(num);
            case 'spice':
                return num + 1;
            case 'bake':
                return num * 3;
            case 'fillet':
                return num * 0.8;
        }
    }



};

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');