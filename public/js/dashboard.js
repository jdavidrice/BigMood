/* eslint-disable no-unused-vars */
$(document).ready(function () {
  let userName, themeName;
  let userId, themeId;
  let userData = [];

  M.AutoInit(); // Initiate dropdown


  // Function to change color class based on the themeId
  function displayTheme(theme) {
    const themeSwitch = $(".theme-switch");
    let color;
    switch (theme) {
    case 2: color = "dark";
      break;
    case 3: color = "red";
      break;
    case 4: color = "blue";
      break;
    case 5: color = "green";
      break;
    default: color = "light";
    }
    themeSwitch.each(function (){
      if((themeSwitch.hasClass("red"))){
        themeSwitch.removeClass("red");
      }
      if((themeSwitch.hasClass("blue"))){
        themeSwitch.removeClass("blue");
      }
      if((themeSwitch.hasClass("green"))){
        themeSwitch.removeClass("green");
      }
      if((themeSwitch.hasClass("dark"))){
        themeSwitch.removeClass("dark");
      }
      if((themeSwitch.hasClass("light"))){
        themeSwitch.removeClass("light");
      }
      themeSwitch.addClass(color);
    });
  }

  // Get the current theme for the current user
  function getTheme(user){
    $.get(`/api/users/${user}`).then(function (data) {
      let userTheme = data.ThemeId; // current user Theme
      displayTheme(userTheme);
      return userTheme;
    });
  }



  // Get the current user name and id
  $.get("/api/user_data").then(function (data) {
    userName = data.name; // current username
    userId= data.id; // current user id
    $(".current-user").text(userName);
    console.log("First userId ", userId); //FOR TESTING
    themeId= getTheme(userId);
  });


  /* Get all previous data from current user
  $.get(`/api/userdata/${userId}`).then(function (data) {
    userData = data;
    console.log(userData); //FOR TESTING
  }).catch((err) => {
    console.log(JSON.stringify(err));
  }); */

  /**** Side Nav Menu ****/
  const slideMenu = document.querySelectorAll(".sidenav");
  M.Sidenav.init(slideMenu, {});

  // Dropdown listeners
  $("#dropdown1").click(e => {
    newTheme = e.target.firstChild.textContent;
    themeId = e.target.getAttributeNode("data-id").value;

    let updatingUser = {
      id: userId,
      ThemeId: themeId
    };
    console.log(updatingUser); // FOR TESTING
    // Update ThemeId for current user in users table
    $.post("/api/update", updatingUser).then((data) => {
      console.log(themeId);
      location.reload("dashboard");

    }).catch((err) => {
      console.log(JSON.stringify(err));
    });
  });


  /**** Statistics tabs ****/
  const stats = $(".tabs");
  M.Tabs.init(stats, {});
  // Get Random quote at loading page
  $.get("/api/quotes").then( (data) => {
    let quote;
    quote = data[Math.floor(Math.random() * data.length)];
    $("#new-quote").text(quote.body);
    $("#author").text(`— ${quote.author}`);
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });

  /**** Modal New Entry ****/
  const newEntryWindow = document.querySelector(".modal");
  M.Modal.init(newEntryWindow, {});


  // Dropdown for sorting all entries
  const sortBy = document.querySelector("select");
  M.FormSelect.init(sortBy, {});


  // Collapsible for all entries
  const displayNew = document.querySelector(".collapsible");
  M.Collapsible.init(displayNew, {});



  // Select menu for changing the theme
  var elems = document.querySelectorAll("select");
  // var instances = M.FormSelect.init(elems, options);


  // switch () {
  //   case :

  //     break;
  //   case :

  //     break;

  // }


  // const theme = $(".theme");
  // M.Theme.init(theme, {});
  // $.post("/api/update").then(function (data) {
  //   if (theme.classList.contains
  // });


  const postmoodactivity = document.getElementById("createform");

  if (postmoodactivity) {
    postmoodactivity.addEventListener("submit", (e) => {
      e.preventDefault();


      const newUserData = {
        moodId: document.querySelectorAll("input[name=\"moodgroup\"]"),
        activityId: document.querySelectorAll("input[name=\"activitygroup\"]"),
      };
      console.log(newUserData);

      fetch("/api/userdata", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newUserData),
      }).then((response) => {


        console.log("Created a new user data!");
        location.reload();
      });
    });
  }



});
