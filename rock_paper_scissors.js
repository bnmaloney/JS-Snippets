function winner(move) {
  if (move==='scissors') {
    return 'rock';
  } else if (move==='rock') {
    return 'paper';
  } else if(move==='paper') {
    return 'scissors';
  }
  return 'n/a';
}

function winner2(move) {
  switch (move) {
    case 'scissors':
      return 'rock';
    case 'rock':
      return 'paper';
    case 'paper':
      return 'scissors';
    default:
      return 'n/a';
  }
}

function winner3(move) {
  let moveGenie = {
    'scissors': 'rock',
    'rock': 'paper',
    'paper': 'scissors'
  };

  return moveGenie[move] || 'n/a';
}

const x =  function (move) {
  console.log('move:', move, ' beaten by: ', winner(move), winner2(move), winner3(move));
}


let moves = ['rock', 'paper', 'scissors', 'god']

// pre; cond; post
for (let i = 0; i < moves.length; i++) {
  let m = moves[i];
  x(m);
}



  //rock beats scissors
	//scissors beats paper
	//paper beats rock
