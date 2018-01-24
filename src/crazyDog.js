var CrazyDog = function (top, left, timeBetweenSteps) {
  Dog.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', './src/Funny_Dog_Transparent_PNG_Clipart.png');
  this.$node.attr('id', 'crazyDog');
  
  this.wag();
};

CrazyDog.prototype = Object.create(Dog.prototype);
CrazyDog.prototype.constructor = CrazyDog;

CrazyDog.prototype.chaseBall = function () {
  this.$node.stop().animate({'left': '-20px'}, 500);
};

CrazyDog.prototype.wag = function () {
  var waggingDog = this;
  setInterval( function () {
    if (waggingDog.$node.attr('src') === './src/Funny_Dog_Transparent_PNG_Clipart.png') {
      waggingDog.$node.attr('src', './src/Funny_Dog_Transparent_PNG_Clipart_flipped.png');
      
    } else if (waggingDog.$node.attr('src') === './src/Funny_Dog_Transparent_PNG_Clipart_flipped.png') {
      waggingDog.$node.attr('src', './src/Funny_Dog_Transparent_PNG_Clipart.png');
    }
  }, this.timeBetweenSteps);
};