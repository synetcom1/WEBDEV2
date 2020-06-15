function setup() {
    createCanvas(600, 400);
    background(250, 250, 100);
}

function draw() {
    noStroke();
    fill(0, 0, 255, 50);
    ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
    background(250, 250, 100);
}
