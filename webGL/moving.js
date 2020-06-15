let circleX = 0;
let circleY = 0;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(250, 250, 100);
    fill(250, 200, 200);
    ellipse(circleX, circleY, 50, 50);

    circleX += 1;
    circleY += 1;
}