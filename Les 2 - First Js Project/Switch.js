// Digit SApelling
// 0 - Zero, 1 - One ...... 9- nine, 10- note a valid Digit

// Switch , case, break, default

// var digit = prompt("enter any Digit");

// switch(digit){
//     case "0":
//         console.log("Zero");
//         break;
//     case "1":
//         console.log("One");
//         break;
//     case "2":
//         console.log("Two");
//     break;
//     case "3":
//         console.log("Three");
//         break;
//      case "4":
//         console.log("Four");
//         break;
//     case "5":
//         console.log("Five");
//         break;

//     case "6":
//         console.log("Six");
//         break;
//     case "7":
//         console.log("Saven");
//         break;

//     case "8":
//         console.log("Eight");
//         break;
//     case "9":
//         console.log("Nine");
//         break;
//     case "0":
//         console.log("Zero");
//         break;
//     default:
//         console.log("Not A digit");
//     }



// if (digit == 0)
//     document.write("Zero");
// else if (digit == 1)
//     document.write("One");
// else if (digit == 2)
//     document.write("Two");
// else if (digit == 3)
//     document.write("Three");
// else if (digit == 4)
//     document.write("Four");
// else if (digit == 5)
//     document.write("Five");
// else if (digit == 6)
//     document.write("Six");
// else if (digit == 7)
//     document.write("Saven");
// else if (digit == 8)
//     document.write("Eight");
// else if (digit == 9)
//     document.write("Nine");
// else
//     document.write("Not a Digit");



// task 5

var lett = prompt("Enter a Latter:");

letters = lett.toLowerCase();


switch(letters){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    document.write("This is Vowel = " + letters.toUpperCase());
    break
    default:
    document.write("This is Consonant = " + letters.toUpperCase() );
}