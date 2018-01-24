var Cat = function (top, left, timeBewteenSteps) {
  Dancer.call(this, top, left, timeBewteenSteps);
  this.$node.attr("src", "http://bit.ly/2n2jkhJ");
  this.$node.attr('id', 'cat');
  
};

Cat.prototype = Object.create(Dancer.prototype);
Cat.prototype.constructor = Cat;

