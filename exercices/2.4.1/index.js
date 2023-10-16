const myButton = document.querySelector("#myButton");
const message = document.querySelector("#message");

let timeoutID;
const delayInSeconds = 5;
const delayInMiliSeconds = delayInSeconds * 1000;
let count = 0;
let startTime;

myButton.addEventListener("mouseover", startGame);

myButton.addEventListener("click", () => {
  count++;
  if (count == 10) {
    const endTime = Date.now();
    const intervale = endTime - startTime;
    message.innerText = `You win ! You clicked 10 times within ${intervale} ms`;
    clearAlert();
  }
});

function startGame() {
  startTime = Date.now();
  timeoutID = setTimeout(() => {
    message.innerText = `Game over, you did not click 10 times within 5s !`;
  }, delayInMiliSeconds);
}

function clearAlert() {
  clearTimeout(timeoutID);
}
