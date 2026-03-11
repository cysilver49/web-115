// JavaScript code for form validation
// Prevent form from submitting
let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Retrieve the input field value
  const inputValue = document.getElementById("inputField").value;

  // Regular expression pattern for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (!alphanumericRegex.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    alert("Valid input!");
  } else {
    // Invalid input: display error message
    alert("Invalid input! Please enter only alphanumeric characters.");
  }
});
