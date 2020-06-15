function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(100);

    rectMode(CENTER);
    strokeWeight(4);
    stroke(0, 0, 255);
    //  fourth value is opacity(maximum 255)
    fill(0, 255, 0, 100);
    rect(200, 150, 150, 150);

    noStroke();
    fill(255, 0, 0, 175);
    ellipse(150, 250, 100, 75);

}