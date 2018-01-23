var CrazyDog = function (top, left, timeBetweenSteps) {
  Dog.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "./src/Funny_Dog_Transparent_PNG_Clipart.png");
  this.$node.attr('id', 'crazyDog');
};

CrazyDog.prototype = Object.create(Dog.prototype);
CrazyDog.prototype.constructor = CrazyDog;

CrazyDog.prototype.chaseBall = function () {
  console.log('this function is being called on CrazyDog');
  this.$node.stop().animate({'left': '-20px'}, 500);
};