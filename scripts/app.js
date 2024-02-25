const navButton = document.querySelector(".nav__button");
const navLinks = document.querySelector(".nav__links");
const navBar = document.querySelector(".nav");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navBar.classList.toggle("active");
  if (!navLinks.classList.contains("active")) {
    setTimeout(() => {
      navLinks.classList.toggle("active");
    }, 290);
  } else {
    navLinks.classList.toggle("active");
  }
});
