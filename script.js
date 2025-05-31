const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

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


const linkedin_1 = document.getElementById('linkedin-1');
const linkedin_2 = document.getElementById('linkedin-2');
const github = document.getElementById('github');
const email = document.getElementById('email');
const achivement_1 = document.getElementById('achivement-1');
const achivement_2 = document.getElementById('achivement-2');
const achivement_3 = document.getElementById('achivement-3');
const education = document.getElementById('education');

if (isDark){
  linkedin_1.src = './resources/linkedIn-dark.png'
  linkedin_2.src = './resources/linkedIn-dark.png'
  github.src = './resources/github-dark.png'
  email.src = './resources/email-dark.png'
  education.src = './resources/eduction-dark.png'
  achivement_1.src = './resources/achievement-dark.png'
  achivement_2.src = './resources/achievement-dark.png'
  achivement_3.src = './resources/achievement-dark.png'
}
