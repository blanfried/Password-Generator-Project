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

function generatePassword() {

  let length, lowercase_opt, uppercase_opt, number_opt, special_chars_opt;
  let selected_options = [];
  let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let special_chars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','\'','\"', '\\', '{', '}', '[', ']', '|', '=', '+', '~', '`', '-', '_', '?', ',','.','<','>']
  let password = [], current_char = '';
  
//   push in the selected_option array 0 - lowercase, 1 - uppercase, 2 - numbers, 3 - special chars
  do {
    length = prompt("Choose Password Length (*must be a number between 8-128 characters*)");
  } while (length < 8 || length > 128)

  do {
      lowercase_opt = prompt("Do you want to include lowercase characters? (y - yes, n - no)");
  } while (lowercase_opt.toLowerCase() !== 'y' && lowercase_opt.toLowerCase() !== 'n')

  if (lowercase_opt.toLowerCase() === 'y') {
      selected_options.push(0)
  }

  do {
      uppercase_opt = prompt("Do you want to include uppercase characters? (y - yes, n - no");
  } while (uppercase_opt.toLowerCase() !== 'y' && uppercase_opt.toLowerCase() !== 'n')

  if (uppercase_opt.toLowerCase() === 'y') {
      selected_options.push(1)
  }

  do {
      number_opt = prompt("Do you want to include numbers? (y - yes, n - no");
  } while (number_opt.toLowerCase() !== 'y' && number_opt.toLowerCase() !== 'n')

  if (number_opt.toLowerCase() === 'y') {
      selected_options.push(2)
  }

  do {
      special_chars_opt = prompt("Do you want to include special characters? (y - yes, n - no");
  } while (special_chars_opt.toLowerCase() !== 'y' && special_chars_opt.toLowerCase() !== 'n')

  if (special_chars_opt.toLowerCase() === 'y') {
      selected_options.push(3)
  }

  if (selected_options.length <= 0) {
      alert('Please select at least one option.');
      // terminate the execution
  }



  for (i = 0; i < length; i++) {
      el = selected_options[Math.floor(Math.random()*selected_options.length)];
      if (el == 0) {
            // select random lowercase
            current_char = lowercase[Math.floor(Math.random()*lowercase.length)];
      } else if (el == 1) {
            // select random uppercase
            current_char = uppercase[Math.floor(Math.random()*uppercase.length)];
      } else if (el == 2) {
            // select random number
            current_char = numbers[Math.floor(Math.random()*numbers.length)];
      } else {
            // select random special character
            current_char = special_chars[Math.floor(Math.random()*special_chars.length)];
      }
      password = password + current_char;
  }

  return password
  
}