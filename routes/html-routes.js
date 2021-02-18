/* eslint-disable linebreak-style */

/**** Uncomment if you want html from public instead of Handlebars
// Requiring path to so we can use relative routes to our HTML files
var path = require("path"); */

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }

    /**** Uncomment if you want html from public instead of Handlebars
    res.sendFile(path.join(__dirname, "../public/signup.html"));*/

    res.render("signup");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }

    /**** Uncomment if you want html from public instead of Handlebars
    res.sendFile(path.join(__dirname, "../public/login.html"));*/

    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard", isAuthenticated, function (req, res) {

    /**** Uncomment if you want html from public instead of Handlebars
    res.sendFile(path.join(__dirname, "../public/members.html"));*/

    res.render("dashboard");
  });

};