 // Assignment Code
var generateBtn = document.querySelector("#generate");  
var lowerBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialBank = ['!','@','#','$','%','^', '&', '*', '(', ')', '{', '}', '+', '=', '<', '>', '/'];
var numericBank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var availableBank = []; 

function generatePassword(passLength) {
  var pass = ''
  
  for (let i = 0; i < passLength; i++) {

    randomBank = availableBank[Math.floor(Math.random() * availableBank.length) ]
    pass += randomBank[Math.floor(Math.random() * randomBank.length) ] 
  }
  console.log('Password ???', pass)
  return pass  
} 

  
// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  alert("let's make you a password!")  
  var length = parseInt(prompt('please enter the length of the password between 8-120 characters')); 
  
  if (length < 8) { 
    alert("password is too short")
    return;
  } 
  
  if (length > 120) {
    alert("password is too long") 
    return;
  }
  

  var Lower = confirm('do you want a lower case?');
 
  var Upper = confirm('do you want an upper case?'); 

  var Special = confirm('would you like a special character?'); 
  
  var Num = confirm('how about a number?'); 
  
  if(Lower === true){
    availableBank = availableBank.concat(lowerBank);
  }
  
  if(Upper === true){
    availableBank = availableBank.concat(upperBank);
  }
  
  if(Special === true){
    availableBank = availableBank.concat(specialBank)
  }
  
  if(Num === true){
    availableBank = availableBank.concat(numericBank)
  }

  //Now at this point, the computer has available bank to pick from 
   passwordText.value = generatePassword(length);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
