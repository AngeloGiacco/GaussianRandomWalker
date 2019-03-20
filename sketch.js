var walkers = [];
var mean = 0;
var sd = 1;

function Walker(mean,sd) {
  this.mean = mean;
  this.sd = sd;
  this.x = window.innerWidth/2;
  this.y = window.innerHeight/2;
  var stepy;
  var stepx;

  this.walk = function() {
    stepx = generator.nextGaussian() * this.sd + this.mean;
    stepy = generator.nextGaussian() * this.sd + this.mean;
    this.x += stepx;
    this.y += stepy;
  }

  this.render = function() {
    stroke(255);
    strokeWeight(2);
    point(this.x,this.y);
  }
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  var walker = new Walker(mean,sd);
  walkers.push(walker);
}

function draw() {
  console.log(walkers);
  walkers.forEach(function(walker) {
    walker.render();
    walker.walk();
  });
}
