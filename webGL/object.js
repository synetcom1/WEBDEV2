let circle1 = {
    x: 0,
    y: 200,
    diameter: 50
};
let circle2 = {
    x: 300,
    y: 400,
    diameter: 50
};


let r = 218;
let g = 156;
let b = 190;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(r, g, b);

    fill(250, 200, 200);
    ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);

    fill(150);
    ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter)
    circle2.y -= 10;
    circle1.x += 10;
}