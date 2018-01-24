$(document).ready(function() {
  window.dancers = [];
  window.dogs = [];
  window.cat = [];

  var tennisBall = new Ball(575, 1100);
  $('body').append(tennisBall.$node);



  setInterval (function () {
    if (window.cat.length) {
      window.dogs.forEach (function (dog) {
        dog.chaseCat();
      });
    }

    window.dogs.forEach( function (dog) {
      var cat = $('#cat');

      var dogLeft = Math.round(dog.$node.css('left').split('px')[0]);
      var dogTop = Math.round(dog.$node.css('top').split('px')[0]);

      var catLeft = Number($('#cat').css('left').split('px')[0]);
      var catTop = Number($('#cat').css('top').split('px')[0]);

      if (dogLeft === catLeft && dogTop === catTop) {
        $('#cat').remove();
        var remove = window.cat.pop();
        delete window.cat.pop();

        alert('OMG UR DOG ATE MAAH KITTEHHHH!!!');

        setTimeout (function () {
          window.dogs.forEach(function (dog) {
            dog.stopChasing();
          });
        }, 500);
      }
    });
  }, 200);



  $('.addDancerButton').on('click', function(event) {
    event.preventDefault();

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      600 * Math.random() + 15,
      1100 * Math.random(),
      Math.random() * 1000
    );


    if (dancerMakerFunctionName === 'Cat' && window.cat.length === 0) {
      $(document).mousemove( function(e) {
        $('#cat').stop().animate({left: e.pageX, top: e.pageY}, 300);
      });


      window.cat.push(dancer);
      $('body').append(dancer.$node);

    } else if (dancerMakerFunctionName !== 'Cat') {
      window.dogs.push(dancer);
      $('body').append(dancer.$node);
    }
  });

  var throwTheBall = function (event) {
    event.preventDefault();
    tennisBall.throw();

    setTimeout( function () {
      window.dogs.forEach( function (dog) {
        dog.chaseBall();
      });

      tennisBall = new Ball (575, 1100);
      $('body').append(tennisBall.$node);
    }, 300);

    setTimeout( function () {
      window.dogs.forEach( function (dog) {
        dog.stopChasing();
      });
    }, 1500);
  };

  $('.ballThrow').on('click', throwTheBall);

  $('.ball').on('click', throwTheBall);


});
