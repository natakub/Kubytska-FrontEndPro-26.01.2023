// Переписати код з використанням конструкції switch…case

let numOrStr = prompt("input number or string");
console.log(numOrStr);

// switch (true) {
//   case numOrStr === null:
//     console.log("ви скасували");
//     break;

//   case numOrStr.trim() === "":
//     console.log("Empty String");
//     break;

//   case isNaN(+numOrStr):
//     console.log(" number is Ba_NaN");
//     break;

//   default:
//     console.log("OK!");
// }

switch (numOrStr) {
  case null:
    console.log("ви скасували");
    break;

  case "":
    console.log("Empty String");
    break;

  case isNaN(NaN):
    console.log(" number is Ba_NaN");
    break;

  default:
    console.log("OK!");
}
