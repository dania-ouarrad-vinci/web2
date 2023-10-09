const btn1 = document.querySelector("#myBtn1");
const btn2 = document.querySelector("#myBtn2");
const counter = document.querySelector("#myCounter");
let message = document.querySelector("#myMessage");

let count = 0;
btn1.addEventListener("click", () => {
  count++;
  if (count >= 5 && count <= 9) {
    message.innerHTML = "Bravo, bel échauffement !";
  }
  if (count >= 10) {
    message.innerHTML = "Vous êtes passé maître en l'art du clic !";
  }
  counter.innerHTML = count;
  console.log(count);
  console.log("onClickHandlerForBtn1::click");
});

btn2.addEventListener("click", () => {
  count=0;
  counter.innerHTML = count;
  message.innerHTML = "Compteur réinitialisé";
});
