window.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function animate(sections) {
    sections.forEach((element) => {
      const scrollY = window.scrollY;
      const offsetTop = element.offsetTop - 150;
      const offsetHeight = element.offsetHeight;

      if (scrollY > offsetTop && scrollY < offsetHeight + offsetTop) {
        element.classList.add("show-animate");
      } else {
        element.classList.remove("show-animate");
      }
    });
  }

  window.onscroll = () => animate(sections);
  window.onload = () => animate(sections);
});
