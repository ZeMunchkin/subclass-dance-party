var Dog = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dog');
  this.top = top;
  this.left = left;
};

Dog.prototype = Object.create(Dancer.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.chaseCat = function () {
  var cat = $('#cat');
  $('.dog').stop().animate({left: cat.css('left'), top: cat.css('top')}, 500);
};

Dog.prototype.stopChasing = function () {
  this.$node.stop().animate({'top': this.top, 'left': this.left}, 3000);
};
