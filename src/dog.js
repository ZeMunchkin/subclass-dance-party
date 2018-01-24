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
  if (cat) {
    $('.dog').stop().animate({left: cat.css('left'), top: cat.css('top')}, 500);

    
    var dogLeft = Math.round(this.$node.css('left').split('px')[0]);
    var dogTop = Math.round(this.$node.css('top').split('px')[0]);
    
    var catLeft = Number($('#cat').css('left').split('px')[0]);
    var catTop = Number($('#cat').css('top').split('px')[0]);
    
    // var caughtLeft = (dogLeft < (catLeft + 2)) && (dogLeft > (catLeft - 2));
    // var caughtTop = (dogTop < (catTop + 2)) && (dogTop > (catTop - 2));
    
    if (dogLeft === catLeft && dogTop === catTop) {
      $('#cat').remove();
      window.cat.pop();
      alert('OMG UR DOG ATE MY CAT!!!');
    }
  } else {
  }
};

Dog.prototype.stopChasing = function () {
  this.$node.stop().animate({'top': this.top, 'left': this.left}, 1000);
};

/*Dog.prototype.chaseBall = function () {
  console.log('this function is being called on Dog');
  this.$node.stop().animate({'left': '0px'}, 200);
};
*/ 