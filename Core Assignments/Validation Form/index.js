document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrorMessages();

  // Perform validation
  if (!validateName()) {
    showError("nameError", "Please enter a valid name.");
  }

  if (!validateEmail()) {
    showError("emailError", "Please enter a valid email address.");
  }

  if (!validatePhone()) {
    showError("phoneError", "Please enter a valid phone number (10 digits).");
  }

  if (!validatePassword()) {
    showError("passwordError", "Password must be at least 6 characters.");
  }

  if (!validateAge()) {
    showError("ageError", "You must be at least 18 years old.");
  }

  if (!validateGender()) {
    showError("genderError", "Please select a gender.");
  }

  if (!validateDate()) {
    showError("dateError", "Please select a valid date.");
  }

  if (!validateColor()) {
    showError("colorError", "Please select a color.");
  }

  // If all fields are valid, submit the form
  if (validateForm()) {
    document.getElementById("myForm").submit();
  }
});

function validateName() {
  var name = document.getElementById("name").value;
  return name.length > 0;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  return /^\d{10}$/.test(phone);
}

function validatePassword() {
  var password = document.getElementById("password").value;
  return password.length >= 6;
}

function validateAge() {
  var age = document.getElementById("age").value;
  return age >= 18;
}

function validateGender() {
  var gender = document.querySelector('input[name="gender"]:checked');
  return gender !== null;
}

function validateDate() {
  var date = document.getElementById("date").value;
  return date !== "";
}

function validateColor() {
  var color = document.getElementById("color").value;
  return color !== "";
}

function validateForm() {
  return (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword() &&
    validateAge() &&
    validateGender() &&
    validateDate() &&
    validateColor()
  );
}

function clearErrorMessages() {
  var errorMessages = document.getElementsByClassName("error-message");
  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].textContent = "";
  }
}

function showError(elementId, errorMessage) {
  document.getElementById(elementId).textContent = errorMessage;
}
