var CrazyDog = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css("background-color", "purple");
};

CrazyDog.prototype = Object.create(Dancer.prototype);
CrazyDog.prototype.constructor = CrazyDog;