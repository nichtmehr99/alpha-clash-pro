function handleKeyPressButton(event) {
  const playerPressed = event.key;
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    removeBackgroundColorById(expectedAlphabet);
    const currentScore = getTextValueElementById("current-score");
    const newScore = currentScore + 1;
    setElementValueById("current-score", newScore);
    continueGame();
  } else {
    const currentLife = getTextValueElementById("current-life");
    const newLife = currentLife - 1;
    setElementValueById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyPressButton);

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}
function play() {
  hideScreen("home-screen");
  hideScreen("final-score");
  showScreen("play-ground");
  //   reset life and score
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);

  continueGame();
}
function gameOver() {
  hideScreen("play-ground");
  showScreen("final-score");
  const myScore = getTextValueElementById("current-score");
  setElementValueById("my-score", myScore);
  const currentAlphabet = getElementTextValueById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
