let number = window.prompt("Pick a number 1-100")

for (number; number <= 100; number++) {
    if (number % 2 == 1) {
        alert(number) 
        break;  
    } else {
        continue;
    }
}
