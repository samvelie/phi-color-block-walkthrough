$(document).ready(function(){
  console.log('jQuery is ready to go!');
  var colorArray = ['AliceBlue', 'BlanchedAlmond', 'Chartreuse', 'SandyBrown', 'DodgerBlue', 'Firebrick', 'MidnightBlue'];;

  for (var i = 0; i < colorArray.length; i++) {
    var newColorBlock = $('<div>'); //empty div, not added to page yet
    newColorBlock.css('background-color', colorArray[i]); //makes color of new div
    newColorBlock.addClass('colorBlock');
    $('#colorBlockContainer').append(newColorBlock);
  }

})
