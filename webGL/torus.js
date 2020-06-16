let angle = 0;

function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;

    // create vector
    let v = createVector(dx, dy, 0);

    // divide this vetor by 100
    v.div(100);

    ambientLight(0, 0, 255);

    // directional light (x,y,z, size of vector)
    directionalLight(255, 0, 0, v);

    background(175);

    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);
    noStroke();
    fill(255, 0, 0);
    torus(100, 25);
    angle += 0.03;

}