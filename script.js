// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numArray = ["1","2","3","4","5","6","7","8","9","0"]
var specCharArray = ["!","@","#","$","%","^","&","*","(",")"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password=='failed') {
    writePassword()
  } else {
    passwordText.value = password;
  }
}

function generatePassword() {

  var charCount
  var holdingArray = []
  var finalArray = []

  charCount = parseInt(prompt('How many characters?','(Any number between 8 and 128)'));
  if (isNaN(charCount) || charCount < 8 || charCount > 128) {
    alert("That won't work... You have to type a number between 8 and 128!");
    return 'failed'
  }

  if (confirm('Include lowercase letters?')) {
    holdingArray = holdingArray.concat(lowerCaseArray)
  }
  if (confirm('Include uppercase letters?')) {
    holdingArray = holdingArray.concat(upperCaseArray)
  }
  if (confirm('Include numbers?')) {
    holdingArray = holdingArray.concat(numArray)
  }
  if (confirm('Include special characters?')) {
    holdingArray = holdingArray.concat(specCharArray)
  }
  if (holdingArray.length == 0) {
    alert('Come on... You have to include something!')
    return 'failed'
  }

  for (let i = 0; i < charCount; i++) {
    var randomChar = holdingArray[Math.floor(Math.random()*holdingArray.length)];
    finalArray.push(randomChar);
  }


  return finalArray.join("").toString();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);