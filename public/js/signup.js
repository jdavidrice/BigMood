/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
$(document).ready(function () {
  M.AutoInit(); // Initialize Toasts
  // Getting references to the form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var nameInput = $("input#name-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, non-blank email and password are validated
  signUpForm.on("submit", (event) => {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      name: nameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      M.toast({ html: "Ooops! <br> You forgot to enter your email and/or password.", classes: "rounded" });
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.name, userData.password);
    emailInput.val("");
    nameInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the dashboard page
  // Otherwise we log any errors
  function signUpUser(email, name, password) {
    $.post("/api/signup", {
      email: email,
      name: name,
      password: password
    })
      .then((data) => {
        window.location.replace("/dashboard");
      }) // If there's an error, handle it by throwing up an alert
      .catch((err) => { // If there's an error, log the error
        console.log(err); // FOR TESTING
        if (err.status === 401) {
          M.toast({ html: "The email already exists or you forgot to enter the username. Please try again or go to the login page.", classes: "rounded" });
        }
      });
  }

});