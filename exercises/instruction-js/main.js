let colors = [
    '#D8DBE2',
    '#A9BCD0',
    '#A9BCD0',
    '#373F51',
    '#57799E',
    '#E7E9EE'
];
document.body.addEventListener("mousemove", function (event) {
    let size = Math.floor(Math.random() * 60);
    let dot = document.createElement("span");
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.display = "block";
    dot.style.position = "absolute";
    dot.style.borderRadius = "50%";
    let currColor = Math.floor(Math.random() * colors.length);
    dot.style.backgroundColor = colors[currColor];
    let top = event.clientY;
    let left = event.clientX;
    dot.style.top = top.toString() + "px";
    dot.style.left = left.toString() + "px";
    document.body.appendChild(dot);
});
