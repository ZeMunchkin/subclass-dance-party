
var Dancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<img class="dancer"></img>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(this.timeBetweenSteps);

  this.setPosition(top, left);

};

Dancer.prototype.step = function () {
  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};