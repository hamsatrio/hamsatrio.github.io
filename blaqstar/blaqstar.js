let s = 255;
let h = []; // vai fazer o papel do deque, 
const maxlen = 512;
let S = {
  'color': 0,
  'offset': 0,
};

function hsb(i) {
  return color((i + S['offset']) % (s - S['offset']), s, s, 200);
}

function gray(i) {
  return color(32 + i % 128, 200);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(3);
  colorMode(HSB);
  rectMode(CENTER);
  frameRate(25);
  noCursor(); // test
}

function draw() {
  background(0);
  for (let i = 0; i < h.length; i++) {
    let x = h[i][0];
    let y = h[i][1];
    let sha = h[i][2];
    noFill();
    let c = lerpColor(hsb(i), gray(i), S['color']);
    stroke(c);
    if (sha == 0) {
      square(x, y, (i % s) / 5);
    } else if (sha == 1) {
      circle(x, y, (i % s) / 5);
    }
  }
  if (h.length > 0) {
    h.push(h.shift());
  }
  if (h.length > maxlen) {
    h.shift();
  }
  //text(h.length, 100, 100);
}

function mouseDragged() {
  h.push([mouseX, mouseY, 0]);
   if (h.length > maxlen) {
    h.shift();
  }
}
