const numbers = new Array (2, 22, 12, 17, 18, 39, 129)
const numbers2 = new Array (2, 22, 12, 17, 18, 39, 129)


function arraySum (ffff) {
    let sum = 0;
    for ( i = 0 ; i < ffff.length ; i++) {
        sum += ffff[i]
    }
    console.log(sum);
}

arraySum(numbers2)