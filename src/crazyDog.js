var CrazyDog = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "http://bit.ly/2n2jkhJ");
};

CrazyDog.prototype = Object.create(Dancer.prototype);
CrazyDog.prototype.constructor = CrazyDog;