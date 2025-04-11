const computerDisplay = document.getElementById("computer");
const userDisplay = document.getElementById("user");
const resultDisplay = document.getElementById("result");
const button = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

button.forEach((element) => {
  element.addEventListener("click", (_elem) => {
    userChoice = _elem.target.id;
    userDisplay.innerHTML = userChoice;
    getRandomChoiceFromComputer();
  });
});

function getRandomChoiceFromComputer() {
  const randomNumber = Math.floor(Math.random() * button.length + 1);
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissor";
      break;
  }
  computerDisplay.innerHTML = computerChoice;
  getResult();
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You have won!";
  } else if (computerChoice === "rock" && userChoice === "scissor") {
    result = "Computer have won!";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "Computer have won!";
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    result = "You have won!";
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    result = "You have won!";
  } else if (computerChoice === "scissor" && userChoice === "paper") {
    result = "Computer have won!";
  }

  resultDisplay.innerHTML = result;
}

