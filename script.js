 // Assignment Code
 var generateBtn = document.querySelector("#generate");  

function generatePassword() {
  var pass = ''

  for (let i = 0; i < Length; i++) {
    // console.log('picking a letter!!', lowerBank[Math.floor(Math.random() * lowerBank.length) ]);
    pass += availableBank[Math.floor(Math.random() * availableBank.length) ]
    // pass += upperBank[Math.floor(Math.random() * upperBank.length) ] 
    // pass += specialBank[Math.floor(Math.random() * specialBank.length) ] 
    // pass += numericBank[Math.floor(Math.random() * numericBank.length) ]
  }
  console.log('Password ???', pass)
  return pass  

  
} 
var lowerBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialBank = ['!','@','#','$','%','^', '&', '*', '(', ')', '{', '}', '+', '=', '<', '>', '/'];
var numericBank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var availableBank = []; 
  
// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  alert("let's make you a password!")  
  var Length = parseInt(prompt('please enter the length of the password between 8-120 characters')); 
  
  if (Length < 8) { 
    console.log("password is too short");
    alert("password is too short")
  } 
  
  if (Length > 120) {
    console.log("password is too long"); 
    alert("password is too long")
  }
  

  console.log('logging available bank here ', availableBank)
  console.log(lowerBank)
  var Lower = confirm('do you want a lower case?');
  console.log('lower case ?', Lower)  
  
  var Upper = confirm('do you want an upper case?'); 
  console.log('upper case ?', Upper)
  
  var Special = confirm('would you like a special character?'); 
  console.log('special character  ?', Special)
  
  var Num = confirm('how about a number?'); 
  console.log('number ?', Num)
  
  
  
  if(Lower === true){
    
    availableBank = availableBank.concat(lowerBank);
    console.log('here is my available bank', availableBank)
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
  console.log('Now this is the available bank that is correct',availableBank);

  var password = generatePassword();
  //Now at this point, the computer has available bank to pick from 

   passwordText.value = generatePassword();

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



