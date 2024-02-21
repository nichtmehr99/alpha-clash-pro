function setBackgroundColorById(elementID) {
  const currentAlphabet = document.getElementById(elementID);
  currentAlphabet.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-400");
}
// hide screen function
function hideScreen(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}
// show screen function
function showScreen(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}
// getting random alphabet function
function getARandomAlphabet() {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const index = Math.round(Math.random() * 25);
  const alphabet = alphabets[index];
  return alphabet;
}
function getElementTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function getTextValueElementById(elementID) {
  const element = document.getElementById(elementID);
  const value = parseInt(element.innerText);
  return value;
}
function setElementValueById(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}
