const divs = document.querySelectorAll(".color-div");

divs.forEach((div) => {
  count = 1;
  div.addEventListener("click", (e) => {
    if (count % 2 === 0) {
      div.style.width = "50px";
      div.style.height = "50px";
      div.innerText = "";
      count++;
    } else {
      console.log("click::");
      div.style.width = "160px";
      // e.target.style.width e permet d'avoir accès à la cible même en dehors de la fonction
      div.style.height = "160px";
      div.innerText = div.style.backgroundColor;
      count++;
    }
  });
});

//style permet d'acceder à tout le css
