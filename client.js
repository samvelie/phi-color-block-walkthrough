$(document).ready(function(){
  console.log('jQuery is ready to go!');
  var colorArray = ['AliceBlue', 'BlanchedAlmond', 'Chartreuse', 'SandyBrown', 'DodgerBlue', 'Firebrick', 'MidnightBlue'];;

  for (var i = 0; i < colorArray.length; i++) {
    var newColorBlock = $('<div>'); //empty div, not added to page yet
    newColorBlock.css('background-color', colorArray[i]); //makes color of new div
    newColorBlock.addClass('colorBlock');
    $('#colorBlockContainer').append(newColorBlock);
  }

  //Select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length -1); //gets random number from set of index numbers for colorArray
  var randomColorSelected = colorArray[randomNumberSelected]; //uses randomNumberSelected to pick a color from the array
  $('#userColorPrompt').text(randomColorSelected);

});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
