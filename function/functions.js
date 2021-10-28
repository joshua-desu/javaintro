function printOdds (count) {
    for (let num = 1; num < count; num++) {
        if (num % 2 == 1) {
            console.log(num);
        } else {
            continue;
        }
    }
}

printOdds (100);