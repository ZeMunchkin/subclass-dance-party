$(document).ready(function() {
  window.dancers = [];
  window.dogs = [];
  window.cat = [];
  
  var tennisBall = new Ball(800, 1150);
  $('body').append(tennisBall.$node);
  
  
  
  setInterval (function () {
    if (window.cat.length === 1) {
      window.dogs.forEach (function (dog) {
        dog.chaseCat();
      });
    }
  }, 200);


  $('.addDancerButton').on('click', function(event) {
    event.preventDefault();
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    

    if(dancerMakerFunctionName === 'Cat' && window.cat.length === 0) {
      $(document).mousemove( function(e) {
        $('#cat').stop().animate({left: e.pageX, top: e.pageY}, 300);
        // $('body').css({'cursor': 'url(http://bit.ly/1rhj0Mp), auto'});
      });
      
      //window.dancers.push(dancer);
      window.cat.push(dancer);
      $('body').append(dancer.$node);
      
    } else if (dancerMakerFunctionName !== 'Cat') {
      //window.dancers.push(dancer);
      window.dogs.push(dancer);
      $('body').append(dancer.$node);
    }
    
  });
  
  $('.ballThrow').on('click', function(event) {
    tennisBall.throw();
  
    setTimeout( function () {
      window.dogs.forEach( function (dog) {
        dog.chaseBall();
      });
      
      tennisBall = new Ball (800, 1150);
      $('body').append(tennisBall.$node);
    }, 300);
    
    setTimeout( function () {
      window.dogs.forEach( function (dog) {
        dog.stopChasing();
      });
    }, 1000);
    
    
    
  });
  
  
});

