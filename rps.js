let computerChoice = Math.floor(Math.random() * 3) // generates random numbers 0-2
let userChoice = prompt("rock paper scissors"); // asks for user choice

// gets computer choice 
function getCompChoice (value){
  let result = "";

  if(value === 0){
    result = "rock";
  }else if(value === 1){
    result = "paper";
  }else if(value === 2){
    result = "scissors";
  }
  return result;
}
console.log(`computer select = ${getCompChoice(computerChoice)}`);

// gets users choice
function getUserChoice(value){
  let result;
  let choice = value.toLowerCase();

  if(choice === "rock"){
    result = 0;
  }else if(choice === "paper"){
    result = 1;
  }else if(choice === "scissors"){
    result = 2;
  }
  return result;
}
console.log(`user select = ${getUserChoice(userChoice)}`);

// generates game play
function playRound(userSelect, compSelect){
  let result;

  if(userSelect === 0){
    if(compSelect === "rock"){
      result = "rock all";
    }else if(compSelect === "paper"){
      result = "rock loses paper";
    }else if(compSelect === "scissors"){
      result = "rock beats scissors";
    }
  }else if (userSelect === 1){
    if(compSelect === "paper"){
      result = "paper all";
    }else if(compSelect === "scissors"){
      result = "paper loses scissors";
    }else if(compSelect === "rock"){
      result = "paper beats rock";
    }
  }else if(userSelect === 2){
    if(compSelect === "scissors"){
      result = "scissors all";
    }else if(compSelect === "rock"){
      result = "scissors loses rock";
    }else if(compSelect === "paper"){
      result = "scissors beats paper";
    }
  }
  return result
}

let GUC = getUserChoice(userChoice);
let GCC = getCompChoice(computerChoice);

alert(playRound(GUC, GCC)); // displays game result