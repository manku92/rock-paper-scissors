let computerChoice = Math.floor(Math.random() * 3) // generates random numbers 0-2
let userChoice = prompt("rock paper scissors").toLowerCase(); // asks for user choice

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

// generates game play
function playRound(userSelect, compSelect){
  let result;

  if(userSelect === compSelect){
    result = "both tie";
  }else if (userSelect === "rock" && compSelect === "scissors" || userSelect === "paper" && compSelect === "rock" || userSelect === "scissors" && compSelect === "paper"){
    result = `${userSelect} beats ${compSelect}`;
  }else if(compSelect === "rock" && userSelect === "scissors" || compSelect === "paper" && userSelect === "rock" || compSelect === "scissors" && userSelect === "paper"){
    result = `${compSelect} beats ${userSelect}`;
  }
  return result
}

let GUC = userChoice;
let GCC = getCompChoice(computerChoice);

alert(playRound(GUC, GCC)); // displays game result

