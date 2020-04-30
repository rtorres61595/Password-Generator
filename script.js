// Assignment Code
var generateBtn = document.querySelector("#generate");

var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function getOptions() {
  var length = parseInt(prompt("How long of a password"));
  console.log(length);
  if(length < 8) {
    alert("password is too short");
    return;
  }
  if(length > 128) {
    alert("password to long");
    return;
  }
  if(isNaN(length) === true) {
    alert("password must be numbers");
    return;
  }

  var hasNum = confirm("click ok for nums");
  var hasLower = confirm("click for lowerCase");
  var hasUpper = confirm("click for UpperCase");
  var hasSymbol = confirm("click for Symbols");
  if(hasNum === false && hasLower === false && hasUpper === false && hasSymbol === false) {
    alert("please choose at least one type");
    return;
  }

  var passwordOptions = {
    length,
    hasNum,
    hasLower,
    hasUpper,
    hasSymbol
  }
  return passwordOptions;
  
};

function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var passwordDigit = arr[index];
  return passwordDigit;
}


function generatePassword() {
  var options = getOptions();
  
  var superArray = [];
  var result = [];

  if(options.hasNum) {
    superArray = superArray.concat(numArray);
  }
  if(options.hasLower) {
    superArray = superArray.concat(lowerArray);
  }
  if(options.hasUpper) {
    superArray = superArray.concat(upperCaseArray);
  }
  if(options.hasSymbol) {
    superArray = superArray.concat(symbolArray);
  }


  for(var i = 0; i < options.length; i++) {
    var digit = getRandom(superArray);
    result.push(digit);
  }
  return result.join("");
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
