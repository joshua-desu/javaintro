let number = window.prompt("Pick a real number")

    while (number > 0) {
        if (number % 3 == 0 && number % 5 == 0) {
            alert ("Fizzbuzz")
            break;
        } else if (number % 3 == 0) {
            alert ("Fizz")
            break;
        } else if (number % 5 == 0) {
            alert ("Buzz")
            break;       
        } else {
            alert ("you lose");
            break;
        }
    }
        