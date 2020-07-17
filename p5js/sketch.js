// Single-sketch example

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200);
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}
