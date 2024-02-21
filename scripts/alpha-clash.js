function handleKeyPressButton(event){
   const playerPressed = event.key
   const currentAlphabetElement = document.getElementById("current-alphabet")
  const currentAlphabet = currentAlphabetElement.innerText
  const expectedAlphabet = currentAlphabet.toLowerCase()
  
  if(playerPressed === expectedAlphabet){
    removeBackgroundColorById(expectedAlphabet)
    const currentScore = getTextValueElementById('current-score')
    const newScore = currentScore +1
    setElementValueById('current-score',newScore)
    continueGame()
    
  }
  else{
    const currentLife = getTextValueElementById('current-life')
    const newLife = currentLife -1
    setElementValueById('current-life', newLife)
  }
}

document.addEventListener('keyup', handleKeyPressButton)


function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet
  setBackgroundColorById(alphabet)
  
}
function play() {
  hideScreen("home-screen");
  showScreen("play-ground");
  continueGame();
}
