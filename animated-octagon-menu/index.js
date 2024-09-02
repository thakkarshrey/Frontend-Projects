window.addEventListener("DOMContentLoaded", function () {
  let menu_toggle = document.querySelector(".menu-toggle");
  let menu = document.querySelector(".menu");

  menu_toggle.onclick = () => {
    menu.classList.toggle("active");
  };
});
