var pos = 0.00005;
var capture;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.hide();
    slider = createSlider(0, 1000, 0);
    slider.position(windowWidth - 1000, 0);
    slider.class("slider");
}

function draw() {
    imageMode(CENTER);

    translate(width / 2, height / 2);
    for (var i = 0; i < windowWidth; i += 85) {
        for (var j = 0; j < windowHeight; j += 85) {
            rotate(PI / (slider.value()));
            image(capture, i + random(1, 10), j + random(1, 10), 65, 65, i + random(0.5, 1), j, [80 + random(1, 3)], [80]);
        }
    }
}
