let rand = Math.floor(Math.random() * 100) + 1;
let guess = prompt('Try to guess a number 1-100')

do {
    function game() {
        if (guess < rand) {
            alert('Too low')
            guess = prompt('Try to guess a number 1-100')
        } else if (guess > rand) {
            alert('Too high')
            guess = prompt('Try to guess a number 1-100')
        } 
    }    game(guess, rand)
} while (guess != rand);

if (guess = rand) {
    alert('You win!')
}
