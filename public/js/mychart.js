let color = sessionStorage.getItem("color");
let id = sessionStorage.getItem("userId");

/** Get data from API: TO DO ***/
$.get(`/api/userdata/${id}`).then(function(data) {

});


// Temporary hardcoded data for Yaxis
let labelArray = [
  "<i class=\"material-icons\"> </i>",
  "<i class=\"material-icons\">sentiment_very_dissatisfied</i>",
  "<i class=\"material-icons\">sentiment_dissatisfied</i>",
  "<i class=\"material-icons\">sentiment_neutral</i>",
  "<i class=\"material-icons\">sentiment_satisfied</i>",
  "<i class=\"material-icons\">sentiment_very_satisfied</i>"

];

// Draw Chart
var ctx = document.getElementById("chart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: labelArray,
      data: [1, 3, 2, 0, 2, 3, 5],
      backgroundColor: color
    }]
  },
  options: {
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