// Scores
let playerScore = 0;
let computerScore = 0;

// Score elements
const playerScoreElem = document.getElementById("player-score");
const compScoreElem = document.getElementById("comp-score");

// Choice elements
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Comment
const comment = document.getElementById("comment");

const WINNING_MOVES = ["rs", "pr", "sp"];

// Game function
function game(move) {
  let playerMove = move;
  let compMove = getCompMove();
  console.log(`Player: ${playerMove} | Computer: ${compMove}`);

  if (playerMove === compMove) {
    handleDraw(playerMove);
    changeColor("yellow", playerMove);
  } else {
    let combMoves = playerMove + compMove;
    if (WINNING_MOVES.includes(combMoves)) {
      console.log("Win!");
      handleWin(combMoves);
      changeColor("green", playerMove);
    } else {
      console.log("Lose!");
      handleLose(combMoves);
      changeColor("red", playerMove);
    }
  }
}

// Generates random move for computer
function getCompMove() {
  const POSSIBLE_MOVES = ["r", "p", "s"];
  let random = Math.random();
  let range = Math.floor(random * 3);
  let compMove = POSSIBLE_MOVES[range];
  return compMove;
}

// Incase it is a draW
function handleDraw(pMove) {
  let message = "Draw! ";
  switch (pMove) {
    case "r":
      message += "You and computer chose rock.";
      break;
    case "p":
      message += "You and computer chose paper.";
      break;
    case "s":
      message += "You and computer chose scissor.";

    default:
      break;
  }
  comment.innerHTML = message;
}

// Incase player wins
function handleWin(combMoves) {
  playerScore += 1;
  let message = "🙌 Win! ";

  switch (combMoves) {
    case "rs":
      message += "Your rock breaks computer's scissors";
      break;
    case "pr":
      message += "Your paper covers computer's rock";
      break;
    case "sp":
      message += "Your scissors cuts computer's paper";
      break;
    default:
      break;
  }
  comment.innerHTML = message;
  playerScoreElem.innerHTML = playerScore;
}

function handleLose(combMoves) {
  computerScore += 1;
  let message = "😭 Lose! ";

  switch (combMoves) {
    case "sr":
      message += "Computer's rock breaks your scissors";
      break;
    case "rp":
      message += "Computer's paper covers your rock";
      break;
    case "ps":
      message += "Computer's scissors cuts your paper";
      break;

    default:
      break;
  }
  comment.innerHTML = message;
  compScoreElem.innerHTML = computerScore;
}

// Change color for either win, lose or draw
function changeColor(color, pMove) {
  switch (pMove) {
    case "r":
      rockBtn.classList.add(color);
      setTimeout(() => {
        rockBtn.classList.remove(color);
      }, 600);
      break;
    case "p":
      paperBtn.classList.add(color);
      setTimeout(() => {
        paperBtn.classList.remove(color);
      }, 600);
      break;
    case "s":
      scissorsBtn.classList.add(color);
      setTimeout(() => {
        scissorsBtn.classList.remove(color);
      }, 600);
      break;

    default:
      break;
  }
}

rockBtn.addEventListener("click", () => game("r"));
paperBtn.addEventListener("click", () => game("p"));
scissorsBtn.addEventListener("click", () => game("s"));
