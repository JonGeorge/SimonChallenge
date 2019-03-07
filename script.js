var plays = [];
var round = 0;
var count = 0;

var button1 = $('.green');
var button2 = $('.purple');
var button3 = $('.pink');
var button4 = $('.yellow');

var sound1 = new Audio('resources/sounds/green.mp3');
var sound2 = new Audio('resources/sounds/blue.mp3');
var sound3 = new Audio('resources/sounds/red.mp3');
var sound4 = new Audio('resources/sounds/yellow.mp3');

$('.play-button').click(playGame);

function playGame() {
  removeListeners();
  plays = [];
  resetCount();
  resetRound();

  setTimeout(function() {
    playRound();
  }, 500);
}


function executeEndGameTasks() {
  removeListeners();
  console.log("INCORRECT");
  flashRedBackground();
  plays = [];
  resetCount();
  resetRound();
}

function playRound() {
  incrementRound();
  getNextPlay();
  addInGameListeners();
  resetCount();
}

function resetCount() {
  count = 0;
}

function addInGameListeners() {
  button1.click(function() {
    if (isMatch(1, count)) {
      activateButton(button1);
      count++;
      var roundComplete = (count === (plays.length));

      if (roundComplete) {
        removeListeners();
        setTimeout(playRound, 1000);
      }
    }
    else {
      executeEndGameTasks();
    }
  });

  button2.click(function() {
    if (isMatch(2, count)) {
      activateButton(button2);
      count++;
      var roundComplete = (count === (plays.length));

      if (roundComplete) {
        removeListeners();
        setTimeout(playRound, 2000);
      }
    }
    else {
      executeEndGameTasks();
    }
  });

  button3.click(function() {
    if (isMatch(3, count)) {
      activateButton(button3);
      count++;
      var roundComplete = (count === (plays.length));

      if (roundComplete) {
        removeListeners();
        setTimeout(playRound, 2000);
      }
    }
    else {
      executeEndGameTasks();
    }
  });

  button4.click(function() {
    if (isMatch(4, count)) {
      activateButton(button4);
      count++;
      var roundComplete = (count === (plays.length));

      if (roundComplete) {
        removeListeners();
        setTimeout(playRound, 2000);
      }
    }
    else {
      executeEndGameTasks();
    }
  });
}

function isMatch(input, index) {
  if (input != plays[index]) {
    return false;
  }
  return true;
}

function removeListeners() {
  button1.off('click');
  button2.off('click');
  button3.off('click');
  button4.off('click');

}

function activateButton(button) {
  switch (button) {
    case button1:
      sound1.play();
      break;
    case button2:
      sound2.play();
      break;
    case button3:
      sound3.play();
      break;
    case button4:
      sound4.play();
      break;
    default:
      break;
  }

  button.addClass('flash');
  setTimeout(function() {
    button.removeClass('flash');
  }, 200);
}

function flashRedBackground() {
  $('body').addClass('flash-red');
  setTimeout(function() {
    $('body').removeClass('flash-red');
  }, 50);
}

function incrementRound() {
  round++;
  $('.round').text('Round: ' + round.toString());
}

function resetRound() {
  round = 0;
  $('.round').text('Round: 0');
}

function getNextPlay() {
  var move = Math.floor(Math.random() * 4) + 1;
  switch (move) {
    case 1:
      activateButton(button1);
      break;
    case 2:
      activateButton(button2);
      break;
    case 3:
      activateButton(button3);
      break;
    case 4:
      activateButton(button4);
      break;
    default:
      break;
  }
  plays.push(move);
}