let r = 0;
let b = 225;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);

    if (mouseX >= 200 && mouseX <= 400) {
        background(r, 0, b);
    } else {
        background(0);
    }
}