debugger;
var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {

  if (trainSpeed > 10) {
    trainSpeed -= 40;
  }

  clearInterval(animation);
  animation = setInterval(frame, trainSpeed);

  function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + "px";
    checkPosition(trainPosition);
  }
}

function stopTrain() {
  if (trainPosition < 550) {
    clearInterval(animation);
  }
}

function checkPosition(currentPosition) {
  if (currentPosition >= 550) {
    alert("Crash!");
    console.log("Crash!");
    clearInterval(animation);
  }
}
