const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.menu-video').classList.toggle('active');
});
