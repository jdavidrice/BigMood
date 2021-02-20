// Side Nav Menu
const slideMenu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slideMenu, {});

// Statistics tabs
document.addEventListener("DOMContentLoaded", function() {
  const stats = document.querySelector(".tabs");
  M.Tabs.init(stats, {});
});

// Modal New Entry
document.addEventListener("DOMContentLoaded", function() {
  const newEntryWindow = document.querySelector(".modal");
  M.Modal.init(newEntryWindow, {});
});

// Dropdown for sorting all entries
document.addEventListener("DOMContentLoaded", function() {
  const sortBy = document.querySelector("select");
  M.FormSelect.init(sortBy, {});
});

// Collapsible for all entries
document.addEventListener("DOMContentLoaded", function() {
  const displayNew = document.querySelector(".collapsible");
  M.Collapsible.init(displayNew, {});
});

// Select menu for theme
document.addEventListener("DOMContentLoaded", function () {
  // const elems = document.querySelectorAll("select");
  // const instances = M.FormSelect.init(elems, options);
});
