let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    background(51);

    rectMode(CENTER);
    noStroke();
    fill(0, 0, 255, 100);
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);


    box(100);

    angle += 0.01;
}