// Side Nav Menu
const slideMenu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slideMenu, {});

// Modal New Entry
document.addEventListener("DOMContentLoaded", function() {
  const newEntryWindow = document.querySelector(".modal");
  M.Modal.init(newEntryWindow, {});
});