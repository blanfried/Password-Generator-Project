// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password = document.getElementById ("#password");
let options = ['0','1','2','3']

function generatePassword() {

  let length;
  do {
    length = prompt("Choose Password Length (*must be between 8-128 characters*)");
  } while (length < 8 || length > 128)

  option_string = prompt("Choose character types. (Press 0 for lowercase, 1 for UPPERCASE, 2 for number, and 3 for special characters");
  option_array = option_string.split('');
  for (let i = 0; i < option_array.length; i++) {
    option_el = option_array[i];
    if (options.indexOf(option_el) === -1) {
      alert("Please choose valid option.")
    }
  }
  

  // do {
  //   option_string = prompt("Choose character types. (Press 0 for lowercase, 1 for UPPERCASE, 2 for number, and 3 for special characters")
  // } while (options.indexOf(option) === -1);

}