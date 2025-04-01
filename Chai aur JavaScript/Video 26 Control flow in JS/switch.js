// switch (key) {    // key is the value which we wanna check everytime
//     case value:

//         break;

//     default:      // if nothing matches then default is executed
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("january");
        break;         // breaks stops further execution of code once the match is found. if break isn't there then further codes also get executed except default
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:           // if nothing matches then default is executed
        console.log("default case match");
        break;
}