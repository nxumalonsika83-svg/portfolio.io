// // creating variables

// var book;
// var myFirstName; //let the variable describe the info stored
// var favoriteFood;
// var birthday;
// var timeOfDay;

// var _getName;
// var $amountOfDollars;

// // var break = "tomorrow"; reserved words result in error message

// // storing data in variables

book = "JavaScript for Kids for Dummies";
// console.log(book)

// book = "The Call of the Wild";
// console.log(book);

// // understanding data types 

// console.log(book.length);

// var string = "I am a string.".indexOf("am");
// console.log(string);

var numberTest = "10" * 10; // The result is thanks to variable coercion
 console.log(numberTest);

// var numberTest1 = "10" + 10;
// console.log(numberTest1); 

// console.log(1 < 10);
// console.log(1 === 10);
// console.log(1 > 10);

// console.log(Boolean(0));
// console.log(Boolean(1));

// ======prompting user for input and storing input======

// var myName = prompt("What is your name?");
// console.log(myName);
// alert("Good Job");

// alert(37 * 37);

// var myFirstName = "Malcom";
// var youScore = 30;
// alert("Hi, " + myFirstName + ". Your
//  current score is: " + youScore);

// var truck = 
// {
//     color: "Yellow",
//     price: 150000
// };

// console.log(truck.color);

// console.log(truck["color"]);

document.writeln("<h1>Hi, mom!</h1>");
document.write("333 + 100<br>");
document.write("I'm great! Thanks!<br>");
document.write("YHWH is great");

// ======Combining input & output======

var toName = prompt("Please enter your name");
var fromName = prompt("Please enter sender's name");
var letterBody = prompt("Compose letter");

document.write("Dear " + toName + ", <br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);