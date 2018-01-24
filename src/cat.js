var Cat = function (top, left, timeBewteenSteps) {
  Dancer.call(this, top, left, timeBewteenSteps);
  this.$node.attr("src", "http://bit.ly/2n2jkhJ");
  this.$node.attr('id', 'cat');
  
  
  // this.$node.css("background-color", "blue");
};

Cat.prototype = Object.create(Dancer.prototype);
Cat.prototype.constructor = Cat;

//$("#my_image").attr("src","second.jpg");
// http://bit.ly/2n2jkhJ


//mouse: http://bit.ly/1rhj0Mp