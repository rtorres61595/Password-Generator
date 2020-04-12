// main area to pull the id's from the html 
var characterAmountRange = document.getElementById("characterAmountRange")
var characterAmountNumber = document.getElementById("characterAmountNumber")
var includeUppercaseElement = document.getElementById("includeUppercase")
var includeNumbersElement = document.getElementById("includeNumbers")
var includeSymbolsElement = document.getElementById("includeSymbols")
var form = document.getElementById("passwordGeneratorForm")
var passwordDisplay = document.getElementById("passwordDisplay")
// the area that the password characters are coming from using charcodes
var upperCasePassword = arrayFromLowToHigh(65, 90)
var lowerCasePassword = arrayFromLowToHigh(97, 122)
var numberPassword = arrayFromLowToHigh(48, 57)
var symbolPassword = arrayFromLowToHigh(33, 47).concat( arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat( arrayFromLowToHigh(123, 126)
)
//syncing the scroll bar and box 
characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

//the var's for the characters for the password 

form.addEventListener("submit", e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})
// running the code to pull the characters for the password 
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  console.log(upperCasePassword)
  console.log(lowerCasePassword)
  console.log(numberPassword)
  console.log(symbolPassword)
    let charCodes = lowerCasePassword
  if (includeUppercase) charCodes = charCodes.concat(upperCasePassword)
  if (includeSymbols) charCodes = charCodes.concat(symbolPassword)
  if (includeNumbers) charCodes = charCodes.concat(numberPassword)
  
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}