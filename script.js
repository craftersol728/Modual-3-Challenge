// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min , max){
  if (!max) {
    max = min 
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
  
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {

  var userInput = window.prompt("How many characters do you want this password to be ?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Thats Not a Number!! Click generate password again :D")
    return
  } 

  if (passwordLength > 128 || passwordLength < 8 ) {
    window.alert("Password length Must be between 8 and 128 characters")
    return
  }

  var wantNumbers = window.confirm("Do you want numbers in your password?")
  var wantSymbols = window.confirm("Do you want symbols in your password?")
  var wantUppercase = window.confirm("Do you want uppercase letters in your password?")
  var wantLowercase = window.confirm("Do you want lowercase letters in your password?")

  var numbers = ["0","1","2","3","4","5","6","7","8","9",]
  var symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","*","/","?","<",">",";","'","|",]
  var lowercases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
  var uppercases = []
  // var uppercases old list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]

  var totalList = []

  for (var i = 0; i < lowercases.length; i++) {
    uppercases[i] = lowercases[i].toUpperCase()
  }

  if (wantNumbers === true) {
    totalList.push(numbers)
  }

  if (wantSymbols === true) {
    totalList.push(symbols)
  }

  if (wantLowercase === true) {
    totalList.push(lowercases)
  }

  if (wantUppercase === true) {
    totalList.push(uppercases)
  }

  if (totalList.length === 0) {
    window.alert("Please choose something!")
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItem(totalList)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }

    return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

