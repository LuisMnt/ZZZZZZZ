// var xoff = 0;
// var yoff = 10000;
var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < windowWidth; x++) {
    stroke(255);
    var y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  start += inc;

  // nooLoop();
}

// var x = map(noise(xoff), 0, 1, 0, windowWidth);
// var y = map(noise(yoff), 0, 1, 0, windowHeight);
// var culur = color(random(250), random(20, 200), random(100, 150));

// xoff += 0.01;
// yoff += 0.01;

// circle(x, y, 50, 50);
// fill(culur);
// }
