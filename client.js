$(document).ready(function(){
  console.log('jQuery is ready to go!');
  var colorArray = ['AliceBlue', 'BlanchedAlmond', 'Chartreuse', 'SandyBrown', 'DodgerBlue', 'Firebrick', 'MidnightBlue'];;

  for (var i = 0; i < colorArray.length; i++) {
    var newColorBlock = $('<div>'); //empty div, not added to page yet
    newColorBlock.css('background-color', colorArray[i]); //makes color of new div
    newColorBlock.addClass('colorBlock'); //adds a class to the div with additional styling
    newColorBlock.data('colorOfBlock', colorArray[i]); //adds information the div without showing it to the user
    $('#colorBlockContainer').append(newColorBlock);
  }

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ //event listener for clicks on divs with class .colorBlock
    console.log('$(this).data().colorOfBlock:', $(this).data().colorOfBlock);
    var colorOfBlockClicked = $(this).data().colorOfBlock;

    if(colorOfBlockClicked==randomColor){
      $('#responseSection').text('You Got It!');
    } else {
      $('#responseSection').text('Oh no...that is not right.')
    }

  });
  //Select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length -1); //gets random number from set of index numbers for colorArray
  var randomColor = colorArray[randomNumberSelected]; //uses randomNumberSelected to pick a color from the array
  $('#userColorPrompt').text(randomColor);

});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
