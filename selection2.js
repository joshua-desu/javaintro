let userInput2 = window.prompt("Name a guitar effect");

switch (userInput2) {
    case "reverb":
        console.log("reverb makes things sound big")
        break;
    case "delay":
        console.log("delay makes echos")
        break;
    case "overdrive":
        console.log("overdrive sounds crunchy")
        break;
    case "tremolo":
        console.log("tremolo sounds like volume waves")
        break;
    case "fuzz":
        console.log("fuzz sounds like a broken mess")
        break;
    default:
        console.log("i dont know that one")
}