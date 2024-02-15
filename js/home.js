// spinner
$(".loading-slide").fadeOut(1500, function () {
  $("body").css("overflow", "auto");
});
// scudle
var app = {
  settings: {
    container: $(".calendar"),
    calendar: $(".front"),
    days: $(".weeks span"),
    form: $(".back"),
    input: $(".back input"),
    buttons: $(".back button"),
  },

  init: function () {
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function (currentSide, desiredSide) {
    settings.container.toggleClass("flip");

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();
  },

  bindUIActions: function () {
    settings.days.on("click", function () {
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on("click", function () {
      instance.swap(settings.form, settings.calendar);
    });
  },
};

app.init();

// display today data
const currentDate = new Date();
// Format each day
const options = { weekday: "long" };
const today = currentDate.toLocaleDateString("en-US", options);

// store month's names

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = currentDate.getDate();
const month = months[currentDate.getMonth()];
const formatMonth = `${day} ${month}`;

let toDay = "";
toDay = `<h2>${formatMonth}</h2>
<h2>shift: 5 PM : 2 AM</h2>`;
document.querySelector(".current-date").innerHTML = toDay;

$(document).ready(function () {
  $(".DealyInfo").on("click", function () {
    $(".home").removeClass("active");

    $(this).addClass("active");
  });
});
