var HappyDog = function(top, left, timeBetweenSteps) {
  Dog.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "http://bit.ly/2BlDCYJ");
  this.$node.attr('id', 'happyDog');
};

HappyDog.prototype = Object.create(Dog.prototype);

HappyDog.prototype.constructor = HappyDog;

/*HappyDog.prototype.step = function () {
  var oldStep = Dancer.prototype.step;
  
  oldStep.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};
*/

//$("#my_image").attr("src","second.jpg");

HappyDog.prototype.chaseBall = function () {
  this.$node.stop().animate({'left': '0px'}, 200);
};