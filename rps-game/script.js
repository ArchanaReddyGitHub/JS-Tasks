let Allimg = document.querySelectorAll(".imagecontainer img");
console.log(Allimg);
let userchoice;
let compchoice;

// Score
let drawScore = 0;
let userScore = 0;
let compScore = 0;
let roundCount = 0;

function compchoicefun() {
  let arr = ["rock", "paper", "scissor"];
  let indexarr = Math.round(Math.random() * 2);
  compchoice = arr[indexarr];
  return compchoice;
}

function gameImplementation(uchoice) {
  if (roundCount >= 10) {
    return;
  }
  roundCount++;

  cchoice = compchoicefun();
  document.getElementById("selection").innerHTML =
    `User selected:  <span class="uchoice">   ${uchoice} </span> and Computer selected:   <span class="cchoice  "> ${cchoice}</span>`;

  if (cchoice === uchoice) {
    document.getElementById("btn").innerHTML = "Draw";
    drawScore++;
    document.getElementById("draw").innerHTML = drawScore;
  }  else if (
    (cchoice === "rock" && uchoice === "scissor") ||
    (cchoice === "paper" && uchoice === "rock") ||
    (cchoice === "scissor" && uchoice === "paper")
  ) {
    document.getElementById("btn").innerHTML = "Computer Won";
    compScore++;
    document.getElementById("compscore").innerHTML = compScore;
  } else if (
    (cchoice === "rock" && uchoice === "paper") ||
    (cchoice === "paper" && uchoice === "scissor") ||
    (cchoice === "scissor" && uchoice === "rock")
  ) {
    document.getElementById("btn").innerHTML = "User Won";
    userScore++;
    document.getElementById("userscore").innerHTML = userScore;
  } else {
    document.getElementById("btn").innerHTML = "Invalid!";
  }
  if (roundCount === 10) {
    let winner;

    if (userScore > compScore) {
      winner = "User won the game";
    } else if (compScore > userScore) {
      winner = "Computer won the game";
    } else {
      winner = "Game Draw!";
    }
    document.getElementById("btn").innerHTML = ` ${winner}`;
  }
  document.getElementById("round").innerText = `Round: ${roundCount} / 10`;
}
Allimg.forEach((i) => {
  i.addEventListener("click", () => {
    userchoice = i.id;
    gameImplementation(userchoice);
  });
});
