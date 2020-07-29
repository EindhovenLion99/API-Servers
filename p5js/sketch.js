let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;

let hr1, hr2;
let mn1, mn2;
let sc1, sc2;


function setup() {
  createCanvas(2100, displayHeight - 20);
  frameRate(1);
}

function draw() {

  background(0);

  hr1 = int(hour() / 10);
  hr2 = hour() % 10;

  mn1 = int(minute() / 10);
  mn2 = minute() % 10;

  sc1 = int(second() / 10);
  sc2 = second() % 10;

  drawPoints();
  getTime();
  SevenSegment(hr1, 680);
  SevenSegment(hr2, 860);
  SevenSegment(mn1, 1100);
  SevenSegment(mn2, 1300);
  SevenSegment(sc1, 1525);
  SevenSegment(sc2, 1725);

  index = (index + 1) % 10;
}

function getColor(val, shift) {
  let r = 255;
  let g = 0;
  let b = 0;
  let a = 255 * (val >> shift) & 1;
  return color(r, g, b, a);
}


function SevenSegment(val, i) {
  push();
  stroke('white');
  strokeWeight(0.2);
  colorMode(RGB, 1);
  noFill();
  //A
  fill(getColor(val, 6));
  rect(-200 + i, 400, 78, 18, 10);
  //B
  fill(getColor(val, 5));
  rect(-120 + i, 420, 18, 98, 10);
  //C
  fill(getColor(val, 4));
  rect(-120 + i, 540, 18, 98, 10);
  //D
  fill(getColor(val, 3));
  rect(-200 + i, 640, 78, 18, 10);
  //E
  fill(getColor(val, 2));
  rect(-220 + i, 540, 18, 98, 10);
  //F
  fill(getColor(val, 1));
  rect(-220 + i, 420, 18, 98, 10);
  //G
  fill(getColor(val, 0));
  rect(-200 + i, 520, 78, 18, 10);

}


function drawPoints() {
  fill('red')
  stroke('white');
  strokeWeight(4);
  circle(820, 500, 30);
  circle(820, 580, 30);
  circle(1250, 500, 30);
  circle(1250, 580, 30);
  noStroke();
  noFill();
}

function getTime() {
  for (i = 0; i < 10; i++) {
    if (hr1 == i)
      hr1 = nums[i];
    if (hr2 == i)
      hr2 = nums[i];
    if (mn1 == i)
      mn1 = nums[i];
    if (mn2 == i)
      mn2 = nums[i];
    if (sc1 == i)
      sc1 = nums[i];
    if (sc2 == i)
      sc2 = nums[i];
  }
}