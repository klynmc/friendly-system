// Assignment code here

//DOM elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//random lowercase letters
function getRandomLower() {
  return String.fromCharCode(Math.floor (Math.random() * 26) + 97);

}

//random uppercase letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor (Math.random() * 26) + 65);

}

//random number between 0 and 9
function getRandomNumber() {
  return String.fromCharCode(Math.floor (Math.random() * 10) + 48);

} 

//random symbols
function getRandomSymbol() {
  var symbols = '!@#$%^&*()[]{}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// SOURCES: 
//https://youtu.be/duNmhKgtcsI
//https://youtu.be/iKo9pDKKHnc

/*generator functions - http://www.net-comber.com/charset.html*/