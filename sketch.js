var walkers = [];
var meanX;
var meanY;
var sd;

let sdSlider;
let meanXSlider;
let meanYSlider;
let xSlider;
let ySlider;
let strokeWeightSlider;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  sdSlider = createSlider(0, 10, 2, 0);
  sdSlider.position(20, 20);
  meanXSlider = createSlider(-1, 1, 0, 0);
  meanXSlider.position(20, 50);
  meanYSlider = createSlider(-1, 1, 0, 0);
  meanYSlider.position(20, 80);
  xSlider = createSlider(0, width, width/2, 0);
  xSlider.position(20, 110);
  ySlider = createSlider(0, height, height/2, 0);
  ySlider.position(20, 140);
  strokeWeightSlider = createSlider(1,4,2,0);
  strokeWeightSlider.position(20,170);
  fill(255);
  text('Standard Deviation', sdSlider.x * 2 + sdSlider.width, 35);
  fill(255);
  text('Mean X', meanXSlider.x * 2 + meanXSlider.width, 65);
  fill(255);
  text('Mean Y', meanYSlider.x * 2 + meanYSlider.width, 95);
  fill(255);
  text('Starting X', xSlider.x * 2 + xSlider.width, 125);
  fill(255);
  text('Starting Y', ySlider.x * 2 + ySlider.width, 155);
  fill(255);
  text('Stroke Weight', strokeWeightSlider.x * 2 + strokeWeightSlider.width, 185);
  button = createButton('reset');
  button.position(20, 195);
  button.mousePressed(reset);
  meanX = meanXSlider.value();
  meanY = meanYSlider.value();
  sd = sdSlider.value();

  var walker = new Walker(meanX,meanY,sd);
  walkers.push(walker);
}

function draw() {
  walkers.forEach(function(walker) {
    walker.render();
    walker.walk();
  });

}

function reset() {
  background(0);
  walkers = [];
  meanX = meanXSlider.value();
  meanY = meanYSlider.value();
  sd = sdSlider.value();
  var walker = new Walker(meanX,meanY,sd);
  walkers.push(walker);
  strokeWeight(0);
  text('Standard Deviation', sdSlider.x * 2 + sdSlider.width, 35);
  fill(255);
  text('MeanX', meanXSlider.x * 2 + meanXSlider.width, 65);
  fill(255);
  text('MeanY', meanYSlider.x * 2 + meanYSlider.width, 95);
  fill(255);
  text('Starting X', xSlider.x * 2 + xSlider.width, 125);
  fill(255);
  text('Starting Y', ySlider.x * 2 + ySlider.width, 155);
  fill(255);
  text('Stroke Weight', strokeWeightSlider.x * 2 + strokeWeightSlider.width, 185);
  fill(255);
  strokeWeight(sw);
}
