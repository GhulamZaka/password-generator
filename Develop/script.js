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
number = ("0123456789") .split("");
Specialcharacter = ("!@#$%^&*") .split("");
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


// Write password to the #password input

function generatePassword() {

  // Ask for user input and lenght of the password
  var UserInput = parseInt
  enter = parseInt(prompt("Specify the lenght of your password."));

// First if statement for validation process
if (!enter) {
  alert("This need a value");
}
// First prompt for the lenght of the password
else if (enter < 8 || enter > 128) {
  enter = alert("You can choose between 8 and 128.");
}

// Series of prompts for passsword criteria
else {
  confirmLowercase = confirm("Do you want to insert lowercase in your password?");
  confirmUppercase = confirm("Do you want to insert uppercase in your password?");
  confirmNumber = confirm("Do you want to insert number in your password?");
  confirmSpecialCharacter = confirm("Do you want to insert special character in your password?");
};

// If none of the criteria is selected 
if (!confirmLowercase && !confirmUppercase && !confirmNumber && confirmSpecialCharacter) {
  choices = alert("Select at least one Option!");
}

// If all of the criterias are selected
else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecialCharacter) {
  choices = Specialcharacter.concat(lowerCase, upperCase, number, Specialcharacter);
}
// If three of the criterias are selected
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

// If two of the criterias are selected
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

// If one of the criteria is selected
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

// Random selection of variables
var password = [];
  // Random selection for all variables selected 
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
// This joins the password array and converts it to a string

var ps = password.join("");
UserInput(ps);
return ps;
} 

// Ad event listener to generate button
generateBtn.addEventListener("click", writePassword);


