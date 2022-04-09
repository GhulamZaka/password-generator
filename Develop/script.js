// Assignment code here

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialCharacter;
var choices;


// Defining variables

lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
numbers = ("0123456789") .split("");
Specialcharacter = ("!@#$%^&*") .split("");
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


// Write password to the #password input

function generatePassword() {
  var userInput = parseInt
  enter = parseInt(prompt("Specify the lenght of your password."));
}
if (!enter) {
  alert("This need a value");
}

else if (enter < 8 || enter > 8) {
  enter = parseInt(prompt("You can choose between 8 and 128."));
}
else {
  confirmLowercase = confirm("Insert lowercase.");
  confirmUppercase = confirm("Insert uppercase");
  confirmNumber = confirm("Insert Number");
  confirmSpecialCharacter = confirm("Insert special character");
}
// 4 negative
if (!confirmLowercase && !confirmUppercase && !confirmNumber && confirmSpecialCharacter) {
  choices = alert("Select at least one Option!");
}
// 4 positive
else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(lowerCase, upperCase, number, Specialcharacter);
}
// 3 positive
else if (confirmUppercase && confirmNumber && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(upperCase, number, Specialcharacter);
}

else if (confirmLowercase && confirmNumber && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(lowerCase, number, Specialcharacter);
}
else if (confirmLowercase && confirmUppercase && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(lowerCase, upperCase, Specialcharacter);
}
else if (confirmLowercase && confirmUppercase && confirmNumber) {
  choices = number.concat(lowerCase, upperCase);
}

// 2 positive
else if (confirmUppercase && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(upperCase);
}

else if (confirmLowercase && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(lowerCase);
}
else if (confirmNumber && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(number);
}
else if (confirmLowercase && confirmUppercase) {
  choices = lowerCase.concat(upperCase);
}
else if (confirmNumber && confirmUppercase) {
  choices = number.concat(upperCase);
}

// 1 positive
else if (confirmLowercase) {
  choices = lowerCase;
}
else if (confirmUppercase) {
  choices = upperCase;
}
else if (confirmNumber) {
  choices = numbers;
}
else if (confirmCharacter) {
  choices = specialChar;
};

var password = [];













// Ad event listener to generate button
generateBtn.addEventListener("click", writePassword);


