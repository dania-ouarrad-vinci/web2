const red = document.querySelector("#div-red");
const orange = document.querySelector("#div-orange");
const green = document.querySelector("#div-green");

let myIntervalId;

colorDiv();

function colorDiv() {
  myIntervalId = setInterval(backgroundDivRed, 2000);
}

let count = 0;

function backgroundDivRed() {
  if (count % 2 == 0) {
    orange.style.backgroundColor = "white";
  }
  red.style.backgroundColor = "red";
  resumeInterval();
  myIntervalId = setInterval(backgroundDivOrange, 2000);
}

function backgroundDivOrange() {
  count++;
  if (count % 2 == 0) {
    green.style.backgroundColor = "white";
    orange.style.backgroundColor = "orange";
    resumeInterval();
    myIntervalId = setInterval(backgroundDivRed, 2000);
  } else {
    red.style.backgroundColor = "white";
    orange.style.backgroundColor = "orange";
    resumeInterval();
    myIntervalId = setInterval(backgroundDivGreen, 2000);
  }
}

function backgroundDivGreen() {
  orange.style.backgroundColor = "white";
  green.style.backgroundColor = "green";
  resumeInterval();
  myIntervalId = setInterval(backgroundDivOrange, 2000);
}

function resumeInterval() {
  if (myIntervalId) {
    clearInterval(myIntervalId);
    myIntervalId = undefined;
  } else colorDiv();
}
