document.addEventListener("DOMContentLoaded", function () {
  const start_button = document.querySelector(".tour__start-button");
  const tour_overlay = document.querySelector(".tour__overlay");
  start_button.onclick = () => {
    if (tour_overlay.classList.contains("tour__overlay-hidden")) {
      tour_overlay.classList.remove("tour__overlay-hidden");
    } else {
      tour_overlay.classList.add("tour__overlay-hidden");
    }
  };
});
