describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('cat', function () {
  var cat, clock;
  var timeBetweenSteps = 100;
  
  beforeEach (function () {
    clock = sinon.useFakeTimers();
    cat = new Cat( 10, 20, timeBetweenSteps);
  });
  
  it('should inherit step method from dancer', function () {
    expect(cat.step).to.be.a('function');
  });
  
  it('should have a JQuery node object', function () {
    expect(cat.$node).to.be.an.instanceOf(jQuery);
  });
});

describe('happyDog', function () {
  var happyDog, clock;
  var timeBetweenSteps = 100;
  
  
  beforeEach (function () {
    clock = sinon.useFakeTimers();
    happyDog = new HappyDog( 10, 20, timeBetweenSteps);
  });
  // it('should call the chaseCat method after instantiating cat', function(){
  //   sinon.spy(happyDog, 'chaseCat');
  //   expect(happyDog.chaseCat.callCount).to.be.equal(0);
    
  // });
  it('should inherit step method from dancer', function () {
    expect(happyDog.step).to.be.a('function');
  });
  it('should inherit chaseCat and stopChasing from Dog', function () {
    expect(happyDog.chaseCat).to.be.a('function');
    expect(happyDog.stopChasing).to.a('function');
  });
});

describe('crazyDog', function () {
  var crazyDog, clock;
  var timeBetweenSteps = 100;
  
  beforeEach (function () {
    clock = sinon.useFakeTimers();
    crazyDog = new CrazyDog( 10, 20, timeBetweenSteps);
  });
  
  it('should have a wag function that makes the image flip horizontally', function () {
    sinon.spy(crazyDog.$node, 'attr');
    crazyDog.wag();
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(crazyDog.$node.attr.called).to.be.true;
  });
  
  it('should inherit step method from dancer', function () {
    expect(crazyDog.step).to.be.a('function');
  });
  it('should inherit chaseCat and stopChasing from Dog', function () {
    expect(crazyDog.chaseCat).to.be.a('function');
    expect(crazyDog.stopChasing).to.a('function');
  });
});

