function plus(number) {
    return (newNumber) => (newNumber += number);
}

plus15 = plus(15)
console.log(plus15(10))