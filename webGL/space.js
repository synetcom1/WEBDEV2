let angle = 0;

let img;

function preload() {
    img = loadImage("space.jpg");
}

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(100);

    pointLight(255, 255, 255, 0, 0, 0);

    push();
    translate(200, 0, 0);
    sphere(10);
    pop();

    translate(0, 0, mouseX);
    rotateX(angle);
    rotateY(angle * 0.6);
    rotateZ(angle * 1.2);
    fill(255, 0, 0, 100);
    texture(img);

    box(50);


    angle += 0.02;



}