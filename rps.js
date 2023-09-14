console.log('AI VS HUMANS');
console.log('Rock, Paper, Scissors to save the world');
console.log();
console.log();

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'){
    return userInput;
  } else if (userInput === 'paper'){
    return userInput;
} else if (userInput === 'rock'){
    return userInput;
} else {
  console.log('Invalid choice')
}
};

function getComputerChoice(){
  randomNumber = Math.floor(Math.random()*3)

  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "Its a Tie";
  };

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "You lose, AI prevails";
    };
    if (computerChoice === 'scissors'){
      return "Scissors smashed! Humanity is saved!";
    };
  };
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "You lose, AI prevails";
    };
    if (computerChoice === 'rock'){
      return "Rock covered! Humanity is saved!";
    };
  };
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "You lose, AI prevails";
    };
    if (computerChoice === 'paper'){
      return "Paper cut! Humanity is saved!";
    };
  };
};



const playGame = () => {
  const userChoice = getUserChoice('rock');
  console.log(`User picked: ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computer picked: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
