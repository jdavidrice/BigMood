/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
$(document).ready(function () {
  let userName;
  let userId, themeId, newTheme;

  /*** Materialize items activation ***/
  // Side Nav Menu
  const slideMenu = $(".sidenav");
  M.Sidenav.init(slideMenu, {});

  // Initiate dropdown
  M.AutoInit();

  // Tabs for statistics
  const stats = $(".tabs");
  M.Tabs.init(stats, {});

  // Dropdown for sorting all entries
  const sortBy = $("select");
  M.FormSelect.init(sortBy, {});

  // Collapsible for all entries
  const displayNew = $(".collapsible");
  M.Collapsible.init(displayNew, {});

  // Modal for new entry
  const newEntryWindow = $(".modal");
  M.Modal.init(newEntryWindow, {});


  // Function to get the most commonly found in an array
  function commonlyUsed(arr){
    return arr.sort((a,b) =>
      arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
    ).pop();
  }

  //Function to calculate the average
  function average(total, counter){
    let avg = 0;
    if (counter) {
      avg = total / counter;
    }
    return avg;
  }

  // Function to draw the chart
  function drawChart(labelX, labelY, data, color){
    let ctx = $("#chart").get(0).getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labelX,
        datasets: [{
          label: labelY,
          data: data,
          backgroundColor: color
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: "Average weekly mood"
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "HAPPINESS LEVEL"
            },
            gridLines: {
              drawOnChartArea: false
            },
            ticks: {
              max: 5,
              min: 0,
              stepSize: 1,
              display: false
            }
          }]
        }
      }
    });
  }

  // Function to get the data to draw the chart
  function statChart(id, color){
    let userMoods = [], entryDates = [], datesIndex=[], avgMood=[];
    let sundayTotal = 0, mondayTotal = 0, tuesdayTotal = 0,
      wednesdayTotal = 0, thursdayTotal = 0, fridayTotal = 0, saturdayTotal = 0,
      sundayCounter=0, mondayCounter=0, tuesdayCounter=0, wednesdayCounter=0,
      thursdayCounter=0, fridayCounter=0, saturdayCounter=0;
    const weekdayArr= ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

    // Get data from API for the last 7 days
    $.get(`/api/userdata2/${id}`).then((res) => {
      let index; let date;

      // Pushing result in differents arrays
      for (let i = 0; i < res.length; i++){
        userMoods.push(res[i].moodId); // Get all moodId for a user in the last 7 days
        date = res[i].updatedAt;
        index = new Date(date).getDay(); // Get the index of the week day
        entryDates.push(date);
        datesIndex.push(index);
      }
      console.log("moods for graph: ", userMoods); //FOR TESTING
      console.log("Entrydates for graph: ", entryDates); //FOR TESTING
      console.log("datesindex for graph: ", datesIndex); //FOR TESTING

      for(let i = 0; i< datesIndex.length; i++){
        switch (datesIndex[i]) {
        case 1: mondayTotal +=userMoods[i];
          mondayCounter++;
          break;
        case 2: tuesdayTotal +=userMoods[i];
          tuesdayCounter++;
          break;
        case 3: wednesdayTotal +=userMoods[i];
          wednesdayCounter++;
          break;
        case 4: thursdayTotal +=userMoods[i];
          thursdayCounter++;
          break;
        case 5: fridayTotal +=userMoods[i];
          fridayCounter++;
          break;
        case 6: saturdayTotal +=userMoods[i];
          saturdayCounter++;
          break;
        default: sundayTotal +=userMoods[i]; // Case 0
          sundayCounter++;
          break;
        }
      }
      console.log("Example with Tuesday (mood total): ", tuesdayTotal ); //FOR TESTING
      console.log("Example with Tuesday (counter): ", tuesdayCounter); //FOR TESTING
      // Populate average mood/day
      avgMood.push(average(sundayTotal, sundayCounter));
      avgMood.push(average(mondayTotal, mondayCounter));
      avgMood.push(average(tuesdayTotal, tuesdayCounter));
      avgMood.push(average(wednesdayTotal, wednesdayCounter));
      avgMood.push(average(thursdayTotal, thursdayCounter));
      avgMood.push(average(fridayTotal, fridayCounter));
      avgMood.push(average(saturdayTotal, saturdayCounter));

      console.log("final array: ", avgMood); // FOR TESTING

      // Find today's day:
      const today = new Date();
      const todayIndex = today.getDay();
      console.log("today's date", today); // FOR TESTING
      console.log("todayindex ", todayIndex); // FOR TESTING

      /***TO DO: REODER ARRAY BASE OF TODAY AS LAST ARRAY INDEX ***/

      /***TO DO: BUILD DYNAMIC ARRAY WITH LAST INDEX BEING TODAY'S DAY ***/
      let arrayX= ["M", "T", "W", "T", "F", "S", "S"];

      // Temporary hardcoded data for Yaxis
      let arrayY = [
        "<i class=\"material-icons\"> </i>",
        "<i class=\"material-icons\">sentiment_very_dissatisfied</i>",
        "<i class=\"material-icons\">sentiment_dissatisfied</i>",
        "<i class=\"material-icons\">sentiment_neutral</i>",
        "<i class=\"material-icons\">sentiment_satisfied</i>",
        "<i class=\"material-icons\">sentiment_very_satisfied</i>"

      ];

      drawChart(arrayX, arrayY, avgMood, color); // Draw the chart

    });

  }

  // Function to change color class based on the themeId
  function displayTheme(color) {
    const themeSwitch = $(".theme-switch");
    const themeText = $(".theme-text");

    let themeObj;
    let themeList = [];
    // Get all themes from the table db
    $.get("/api/themes").then((data) => {
      for (let i = 0; i < data.length; i++){
        themeObj = {
          id: data[i].id,
          name: data[i].name
        };
        themeList.push(themeObj);
      }
      // Change background color
      themeSwitch.each(() => {
        for (let i = 0; i < themeList.length; i++){
          if ((themeSwitch.hasClass(themeList[i].name))) {
            themeSwitch.removeClass(themeList[i].name);
          }
        }
        themeSwitch.addClass(color);
      });

      // Change text color
      themeText.each(() => {
        for (let i = 0; i < themeList.length; i++){
          if ((themeText.hasClass(`${themeList[i].name}-text`))) {
            themeText.removeClass(`${themeList[i].name}-text`);
          }
        }
        themeText.addClass(`${color}-text`);
      });
    });
  }


  // Get the current theme for the current user
  function getTheme(id) {
    $.get(`/api/users/${id}`).then((data) => {
      let theme = data.Theme.name; // current Theme name
      displayTheme(theme);
      statChart(id, theme); // Display Chart with theme
      return theme;
    });
  }

  // Function to get all moods average and most used activities
  function MoodsActivities(id){
    $.get(`/api/userdata/${id}`).then((data) => {
      let userMoods = [], userActivities = [], userActivitiesList =[];
      let moodAvgIcon, moodAvgName, myActivityIcon;
      let userActivitiesObject;

      // Pushing result in differents arrays
      for (let i = 0; i < data.length; i++){
        userMoods.push(data[i].moodId); // Get all moodId for a user
        userActivities.push(data[i].Activity.name); // Get all activities for a user
        userActivitiesObject = { // Object containing name and icon
          name: data[i].Activity.name,
          icon: data[i].Activity.icon
        };
        userActivitiesList.push(userActivitiesObject);
      }

      // Getting the average mood
      let total = 0;
      for (let i = 0; i < userMoods.length; i++) {
        total += userMoods[i];
      }
      let moodAvg= Math.round(total/userMoods.length);

      // Finding the matching icon and name for the mood average
      switch (moodAvg) {
      case 1: moodAvgName = "excited";
        moodAvgIcon = "sentiment_very_satisfied";
        break;
      case 2: moodAvgName = "happy";
        moodAvgIcon = "sentiment_satisfied";
        break;
      case 3: moodAvgName = "neutral";
        moodAvgIcon = "sentiment_neutral";
        break;
      case 4: moodAvgName = "sad";
        moodAvgIcon = "sentiment_dissatisfied";
        break;
      case 5: moodAvgName = "breakdown";
        moodAvgIcon = "sentiment_very_dissatisfied";
      }
      $("#fav-mood").text(moodAvgIcon); // Display icon
      $("#my-mood").text(moodAvgName); // Display name

      // Getting the most common activity and finding its icon
      let myActivity= commonlyUsed(userActivities);
      for (let i = 0; i< userActivitiesList.length; i++) {
        if (myActivity === userActivitiesList[i].name){
          myActivityIcon = userActivitiesList[i].icon;
        }
      }
      $("#fav-activity").text(myActivityIcon); // Display icon
      $("#my-activity").text(myActivity); // Display name
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
  }

  // Function to create new entries
  function newEntry(id){
    const postmoodactivity = $("#createform");
    if (postmoodactivity) {
      postmoodactivity.on("submit", (event) => {
        event.preventDefault();
        const moodSelected = $("input[name=\"moodgroup\"]");
        const activitySelected = $("input[name=\"activitygroup\"]");
        let moodValue;
        let activityValue;
        for (const moodSelect of moodSelected) {
          if (moodSelect.checked) {
            moodValue = moodSelect.value;
            break;
          }
        }
        for (const activityselect of activitySelected) {
          if (activityselect.checked) {
            activityValue = activityselect.value;
            break;
          }
        }
        if (!moodValue || !activityValue){
          M.toast({ html: "You need to select a mood AND an activity.", classes: "rounded" });
        } else{
          const newUserData = {
            moodId: moodValue,
            activityId: activityValue,
            userId: id
          };

          // create new entries in userdata table
          $.post("/api/userdata", newUserData).then((response) => {
            location.reload();
          }).catch((error) => {
            console.log(JSON.stringify(error));
          });
        }
      });
    }
  }

  // Get the current user name and id and render all dependencies
  $.get("/api/user_data").then((data) => {
    userName = data.name; // current username
    userId = data.id; // current user id
    $(".current-user").text(userName);
    getTheme(userId);
    MoodsActivities(userId);
    newEntry(userId);
  });

  // Dropdown listeners
  $("#dropdown1").click(e => {
    newTheme = e.target.firstChild.textContent;
    themeId = e.target.getAttributeNode("data-id").value;
    let updatingUser = {
      id: userId,
      ThemeId: themeId
    };
    // Update ThemeId for current user in users table
    $.post("/api/update", updatingUser).then((data) => {
      location.reload();
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
  });

  // Get Random quote at loading page
  $.get("/api/quotes").then((data) => {
    let quote;
    quote = data[Math.floor(Math.random() * data.length)];
    $("#new-quote").text(quote.body);
    $("#author").text(`— ${quote.author}`);
  }).catch((error) => {
    console.log(JSON.stringify(error));
  });

});
