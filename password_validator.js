function isPasswordValid(input) {
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacters(input)) {
    console.log('The password you entered is valid!');
  } 
  
  if (!hasUppercase(input)) {
    console.log('The password must contain at least one capital letter!');
  } 
  
  if (!hasLowercase(input)) {
    console.log('The password must contain at least one lowercase letter!');
  } 
  
  if (!isLongEnough(input)) {
    console.log('The password you entered is too short!');
  }
  
  if (!hasSpecialCharacters(input)) {
    console.log('The password must contain at least one special character!');
  }
} 

function hasUppercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
  
  return false;
}

function hasLowercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
  
  return false;
}

function isLongEnough(input) {
  return (input.length >= 8) ? true : false;
}

function hasSpecialCharacters(input) {
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  
  
  
  for (var i = 0; i < input.length; i++) {
    if (specialChars.indexOf(input[i]) != -1) {
      return true;
    }
  }
  
  return false;
}


isPasswordValid('2ttjkhjThh!*');
