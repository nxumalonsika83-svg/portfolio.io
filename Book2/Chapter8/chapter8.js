// console.log(typeof 9);
// var doTheMath = 7 + 8 + 18;
// doTheMath;

var dreamCar = {
 make: "Lexus",
 model: "LFA",
 color: "red",
 year: 2015,
 bodyStyle: "Luxury Car",
 price: 45000,
 style: "pretty"
};
// console.log(typeof dreamCar);
alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
document.getElementById("carstyle").innerHTML = dreamCar.style;