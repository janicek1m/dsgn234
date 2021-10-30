
let body = document.body;
let h1 = document.querySelector(".hello");

function changeFont() {
  body.classList.toggle("light");
  h1.classList.toggle("font");
}

let button = document.querySelector(".hello");
button.addEventListener("click", changeFont);