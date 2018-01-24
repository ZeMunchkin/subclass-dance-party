var HappyDog = function(top, left, timeBetweenSteps) {
  Dog.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "http://bit.ly/2BlDCYJ");
  this.$node.attr('id', 'happyDog');
};

HappyDog.prototype = Object.create(Dog.prototype);

HappyDog.prototype.constructor = HappyDog;

HappyDog.prototype.chaseBall = function () {
  this.$node.animate({'left': '0px'}, 200);
};