function Walker(meanX,meanY,sd) {
  this.meanX = meanX;
  this.meanY = meanY;
  this.sd = sd;
  this.x = xSlider.value();
  this.y = ySlider.value();
  var stepy;
  var stepx;

  this.walk = function() {
    var xloc = randomGaussian();
    var yloc = randomGaussian();
    stepx = xloc * this.sd + this.meanX;
    stepy = yloc * this.sd + this.meanY;
    this.x += stepx;
    this.y += stepy;
  }

  this.render = function() {
    stroke(255);
    sw = strokeWeightSlider.value();
    strokeWeight(sw);
    point(this.x,this.y);
  }
}
