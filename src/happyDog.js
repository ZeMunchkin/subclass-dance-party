var HappyDog = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "./src/Funny_Dog_Transparent_PNG_Clipart.png");
};

HappyDog.prototype = Object.create(Dancer.prototype);

HappyDog.prototype.constructor = HappyDog;

HappyDog.prototype.step = function () {
  var oldStep = Dancer.prototype.step;
  
  oldStep.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};


//$("#my_image").attr("src","second.jpg");