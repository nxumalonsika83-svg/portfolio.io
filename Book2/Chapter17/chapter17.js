// LOOPS
// FOR LOOPS

// for (var counter = 0; counter < 10; counter++)
// {
//     console.log(counter + ": Hello, JavaScript!");
// };

// for (var i = 10; i > 0; i--) 
// {
//  alert (i);
// };
// alert ("Blast Off!");

// outputting array values with for

// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// for (var i = 0; i < myFriends.length; i++){
//  alert(myFriends[i] + " is my friend.");
// };

// using Math.random () && Math.floor
// alert(Math.random());
// alert(Math.floor(Math.random() * 100));

// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// console.log(myFriends);
// var randomFriend = Math.floor(Math.random() * myFriends.length);
// console.log(randomFriend);
// console.log(myFriends[randomFriend]);
// console.log(myFriends[0]);
// alert(myFriends[randomFriend]);

// WEATHER APP
// debugger;
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]; //length = 5 //index = 0,1,2,3,4
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var minTemp = 0;
var maxTemp = 100;

generateWeather();

function generateWeather ()
{
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        console.log(weatherToday);
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        console.log(tempToday);
        var display = document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + 
        ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
        display;
    };  
};

