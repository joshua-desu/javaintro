let favNumber = 4
let userInput = window.prompt("Guess a number 1-10")

if (userInput < favNumber) {
    console.log("Too low")
}
    else if (userInput > favNumber) {
        console.log("Too high")
    }

    else {
        console.log("Correct!")
    }

