let userName = window.prompt("Enter your name")
let age = window.prompt("Enter your age")

function checkAge (userName, age) {
    let aboveSixteen = `${userName} you can drive now`
    let belowSixteen = `${userName} you can't drive yet`

        if (age >= 16) {
            console.log(aboveSixteen)

        } else if (age < 16) {
        console.log(belowSixteen)
        }
}

checkAge(userName, age);