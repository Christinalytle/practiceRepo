var firstName = "kip"; 

if (firstName == "sam") {
    console.log("Hello, Sam"); 
} else {
    console.log("Hey, " + firstName); 
} 


var costOfMilk = 4; 

if (costOfMilk < 2 ) {
    console.log("We will buy 2 gallons"); 
} else if (costOfMilk < 3 ) {
    console.log("We will buy only 1 gallon"); 
} else {
    console.log("No thanks, way too expensive!"); 
}

var grade = "B" ;

switch (grade) {
    case "A":
        console.log("90-100"); 
        break; 
    case "B":
        console.log("80-89"); 
        break;
    case "C":
        console.log("70-79 "); 
        break; 
    default:
        console.log("0-60"); 
}

var a = 5; 
var b = 7; 

if (a == 5) {
    if (b == 6) {
        console.log("a is 5 and b is 6."); 
    } else {
        console.log("a is 5 but b is not 6.")
    }
}

if (a = 5 && b == 6) {
    console.log("a is 5 and b is 6."); 
}