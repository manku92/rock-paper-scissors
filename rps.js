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

  // if(userSelect === "rock"){
  //   if(compSelect === "rock"){
  //     result = "rock all";
  //   }else if(compSelect === "paper"){
  //     result = "rock loses paper";
  //   }else if(compSelect === "scissors"){
  //     result = "rock beats scissors";
  //   }
  // }else if (userSelect === "paper"){
  //   if(compSelect === "paper"){
  //     result = "paper all";
  //   }else if(compSelect === "scissors"){
  //     result = "paper loses scissors";
  //   }else if(compSelect === "rock"){
  //     result = "paper beats rock";
  //   }
  // }else if(userSelect === "scissors"){
  //   if(compSelect === "scissors"){
  //     result = "scissors all";
  //   }else if(compSelect === "rock"){
  //     result = "scissors loses rock";
  //   }else if(compSelect === "paper"){
  //     result = "scissors beats paper";
  //   }
  // }
  return result
}

let GUC = userChoice;
let GCC = getCompChoice(computerChoice);

alert(playRound(GUC, GCC)); // displays game result

