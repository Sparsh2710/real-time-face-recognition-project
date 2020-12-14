function preload() {}

function setup() {
    Canvas = createCanvas(200, 200);
    Canvas.position(580, 370);
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw() {
    image(Video, 0, 0, 200, 200);   
}