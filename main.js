const loader = document.querySelector(".loader");
const main = document.querySelector(".main");
const navslide = document.querySelector("nav");


function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";

    setTimeout(() => (main.style.opacity = 1), 1);
    setTimeout(() => (navslide.style.opacity = 1), 1);
    setTimeout(() => (mcontent.style.opacity = 1), 1);

  }, 2200);
}

init();

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }`;
      }
    });

    burger.classList.toggle("toggle");
  });
}
navSlide();
