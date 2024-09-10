window.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector(".menu");
  let menu_container = document.querySelector(".menu-container");

  menu.onclick = () => {
    menu.classList.toggle("active");
    menu_container.classList.toggle("active");
  };
});
