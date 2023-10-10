const myForm = document.querySelector("#myForm");
const wish = document.querySelector("#wish");
const message = document.querySelector("#message");
const btn2 = document.querySelector("#btnForm2");

myForm.addEventListener("submit", (event) => {
  console.log("onSubmit::");
  event.preventDefault();
  myForm.style.display = "none";
  message.innerText = `Votre souhait est : ${wish.value}`;
  btn2.style.display="inline-block";
  console.log(`${wish.value}`);
});

btn2.addEventListener("click",(e) => {
 myForm.style.display="inline-block";
 btn2.style.display="none";
 message.innerText="";
 wish.value="";
});