var CrazyDog = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src", "./src/Funny_Dog_Transparent_PNG_Clipart.png");
  this.$node.attr('id', 'crazyDog');
};

CrazyDog.prototype = Object.create(Dancer.prototype);
CrazyDog.prototype.constructor = CrazyDog;

