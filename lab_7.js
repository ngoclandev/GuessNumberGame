"use strict";
const body = document.querySelector("body");
const againBtn = document.querySelector(".again-btn");
const secretBlock = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const guessInput = body.querySelector(".guess");
const checkBtn = document.querySelector(".check-btn");
const message = document.querySelector(".message");
let score = 20;
let interfaceScore = document.querySelector(".score");
let interfaceHighscore = document.querySelector(".highscore");
let highscore = 0;
const displayMessage = function (messageText) {
  message.innerText = messageText;
};

// check guess number with secret number
function clickCheckBtn() {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    displayMessage("⛔ No number!");
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber < secretNumber ? "Too low" : "Too high");
      score--;
      interfaceScore.innerText = score;
    } else {
      message.innerText = lostGameMessage;
      interfaceScore.innerText = 0;
    }
  } else if (guessNumber === secretNumber) {
    secretBlock.innerText = secretNumber;

    displayMessage("Correct number!");
    body.style.background = "#60b347";
    secretBlock.style.width = "240px";
    guessInput.style.background = "#60b347";

    if (score > highscore) {
      highscore = score;
      interfaceHighscore.innerText = highscore;
    }
  }
}
checkBtn.addEventListener("click", clickCheckBtn);

// what happened when click on again button
function clickAgainBtn() {
  score = 20;
  interfaceScore.innerText = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  body.style.background = "#222";
  guessInput.style.background = "#222";
  secretBlock.style.width = "120px";
  secretBlock.innerText = "?";
  displayMessage("Start guessing...");

  body.querySelector(".guess").value = "";
}

againBtn.addEventListener("click", clickAgainBtn);

// When I lazy to use mouse
body.addEventListener("keydown", function (e) {
  switch (e.which) {
    case 13: // Enter key
      clickCheckBtn();
      break;
    case 81: // Q key
      clickAgainBtn();
      break;
  }
});
