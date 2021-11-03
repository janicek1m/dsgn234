let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
button.addEventListener("click", function (event) {
    console.log(event, event.target);
    let image = document.createElement("img");
    image.src = 'bubble.png';
    image.setAttribute("width", "100");
    image.setAttribute("height", "auto");
    image.style.position = "absolute";
    let top = Math.floor(Math.random() * 800);
    let left = Math.floor(Math.random() * 1500);
    image.style.top = top.toString() + "px";
    image.style.left = left.toString() + "px";
    document.body.appendChild(image);
});
