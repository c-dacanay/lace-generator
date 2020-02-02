let a = 0;
let rectSize = 10;
let inc;
let xoff = 0;
let num = 0;
let lace = true;
let slider;
let clearButton;
let saveButton;

function setup() {
  slider = createSlider(0, 7, 5, .1);
  inc = random(.5, 4);
  // console.log(inc);

  clearButton = createButton('clear');
  clearButton.mousePressed(clearBg);

  saveButton = createButton('save');
  saveButton.mousePressed(saveLace);


  createP('click the mouse to pause.');
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
}

function clearBg() {
  background(0);
  inc = random(0, 4);
}


function saveLace() {
  num++;
  console.log(num);
  save('lace' + num + '.png');
}

function draw() {
  // let inc = slider.value();

  push();
  stroke(200);
  strokeWeight(.5);
  for (let i = 0; i < 8; i += 2) {
    let w = width / i
    ellipse(width / 2, height / 2, w);
  }
  pop();

  if (lace) {
    xoff++
    a = a + inc;
    let n = map(noise(xoff), 0, .8, 100, 255);
    stroke(n, 30);
    translate(width / 2, height / 2);
    rotate(a * 1);

    let density = slider.value();
    console.log(density);
    let i = map(sin(xoff * density), -1.0, 1.0, rectSize, width / 2);
    // console.log(i);
    rect(20, 20, rectSize + i, rectSize + i);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    lace = !lace
    console.log(lace);
  }
}