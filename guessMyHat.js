// input: array

var countMistakes = function (arr1, arr2) {
  return arr1.reduce(function(mistakes, value, i) {
    if (value !== arr2[i]) {
      mistakes++;
    }
    return mistakes;
  }, 0);
};

var guessingLogic = function (hats) {
  var guesses = [];
  for (var i = 1; i <= hats.length; i++) {
    guesses.push(parity(hats.slice(i).concat(guesses)));
  }
  return guesses;
};

var parity = function (array) {
  return array.reduce(function(sum, value) {
    return sum + value;
  }) % 2;
};

var playGuessMyHat = function (hats)  {
  var guesses = guessingLogic(hats);
  var mistakes = countMistakes(hats, guesses);
  console.log('Hats:    ' + hats);
  console.log('Guesses: ' + guesses);
  console.log('Number of mistakes: ' + mistakes);
  if (mistakes <= 1) {
    console.log('You have won!');
  } else {
    console.log('You lost...');
  }
};


var hats1 = [1, 0, 0, 1, 0, 0, 1, 1, 0, 1];
var hats2 = [1,1,0,0,1,1,0,1,0,0,0];
var hats3 = [1,1,1,1,1,1,1,1,1,0];

playGuessMyHat(hats1);
playGuessMyHat(hats2);
playGuessMyHat(hats3);
