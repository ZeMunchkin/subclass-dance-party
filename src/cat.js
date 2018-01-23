var Cat = function (top, left, timeBewteenSteps) {
  Dancer.call(this, top, left, timeBewteenSteps);
  this.catInThePark = true;
  this.$node.attr("src", "http://bit.ly/2n2jkhJ");
  
  // this.$node.css("background-color", "blue");
};

Cat.prototype = Object.create(Dancer.prototype);
Cat.prototype.constructor = Cat;

//$("#my_image").attr("src","second.jpg");
// http://bit.ly/2n2jkhJ
//$('#myimage').width(700); // Units are assumed to be pixels
//$('#myimage').height(700);