// Assignment code here

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialCharacter;


// Defining variables

lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
numbers = ("0123456789") .split("");
Specialcharacter = ("!@#$%^&*") .split("");
var get = document.querySelector("#generate");


get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps
});

// Write password to the #password input

function writePassword() {
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

if (!confirmLowercase && !confirmUppercase && !confirmNumber && confirmSpecialCharacter) {
  choices = alert("Select at least one Option!");
}








// Ad event listener to generate button
generateBtn.addEventListener("click", writePassword);


