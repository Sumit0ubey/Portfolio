let typed = new Typed (".multuple-text", {
    strings: ["Python Developer", "Java Developer", "Android Developer", "Web Developer", "Data Analysis", "data scientist", "Human"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.getElementById("year").textContent = new Date().getFullYear()
