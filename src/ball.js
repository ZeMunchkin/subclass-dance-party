var Ball = function (top, left) {
  Dancer.call(this, top, left);
  this.$node.addClass('ball');
  this.$node.attr('src', 'http://bit.ly/2ryoCqI');
};

Ball.prototype = Object.create(Dancer.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.throw = function () {
  this.$node.animate({'left': '0px', 'top': '50%', 
    'width': '60px', 'height': '64px'}, 400);
  var ball = this;
  setTimeout(function () {
    ball.$node.remove();
  }, 450);
};

// .then(function() {
//   var ballLeft = Math.round(this.$node.css('left').split('px')[0]);
//   if (ballLeft === 0) {
//     this.$node.remove();
//   }
// });

