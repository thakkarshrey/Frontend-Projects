window.addEventListener("DOMContentLoaded", function () {
  let menu_toggle = document.querySelector(".menu-toggle");
  let octagon_toggle = this.document.querySelector(".octagon");
  let menu = document.querySelector(".menu");

  octagon_toggle.onclick = () => {
    menu.classList.toggle("active");
    menu.classList.toggle("centered");
    octagon_toggle.classList.toggle("centered");
  };
  menu.onclick = () => {
    menu.classList.toggle("active");
    menu.classList.toggle("centered");
    octagon_toggle.classList.toggle("centered");
  };
});
