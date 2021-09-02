// Assignment code here

//DOM elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
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

// Add event listener to generate button
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = " ";

  const typesCount = lower + upper + number + symbol;

  //console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter 
  (
    item => Object.values(item)[0]
  );

  //console.log('typesArr', typesArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      //console.log('funcName', funcName);

      generatePassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(1, length);

  return finalPassword;
}

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

// SOURCES: 
//https://youtu.be/duNmhKgtcsI
//https://youtu.be/iKo9pDKKHnc

//generator functions - http://www.net-comber.com/charset.html