function winner(move) {
  if (move==='scissors') {
    return 'rock';
  }
  if (move==='rock') {
    return 'paper';
  }
  if(move==='paper') {
    return 'scissors';
  }
}

function winner2(move) {
  switch (move) {
    case 'scissors':
      return 'rock';
    case 'rock':
      return 'paper';
    case 'paper':
      return 'scissors';
  }
}

function winner3(move) {
  let moveGenie = {
    'scissors': 'rock',
    'rock': 'paper',
    'paper': 'scissors'
  };

  return moveGenie[move];
}

['rock', 'paper', 'scissors'].forEach(function (move) {
  console.log('move:', move, ' beaten by: ', winner(move), winner2(move), winner3(move));
})



  //rock beats scissors
	//scissors beats paper
	//paper beats rock
