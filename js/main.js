/**
 * Circle text
 */
const container = document.getElementById("circle-text-container");
const text = "///DESIGN GOES BEYOND SREENS"; // Longer text to display
const radius = 50; // Radius of the circle
const angleIncrement = (2 * Math.PI) / text.length; // Angle between each character

for (let i = 0; i < text.length; i++) {
  const angle = i * angleIncrement;
  const x = Math.round(radius * Math.cos(angle));
  const y = Math.round(radius * Math.sin(angle));

  const character = document.createElement("div");
  character.textContent = text[i];
  character.classList.add("character");
  character.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
    angle + Math.PI / 2
  }rad)`;
  container.appendChild(character);
}

/**
 * About tabs
 */
var tabLinks = document.getElementsByClassName("tab_links");
var tabContents = document.getElementsByClassName("tab_contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active_link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active_tab");
  }
  event.target.classList.add("active_link");
  document.getElementById(tabname).classList.add("active_tab");
}

/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

/**
 * Light and dark mode
 */

let btn = document.querySelector("#togglebtn");
let logo = document.querySelector(".logo");
let map = document.querySelector(".map");

btn.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    btn.src = "assets/moon.png";
    btn.classList.add("dark");
    logo.classList.add("dark");
    map.classList.remove("dark");
  } else {
    btn.src = "assets/sun.png";
    btn.classList.remove("dark");
    logo.classList.remove("dark");
    map.classList.add("dark");
  }
};

/**
 * detect light mode
 */
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
const mqCallback = (mq) => {
  if (mq.matches) {
    console.log("l");
    document.body.classList.add("light-theme");
    btn.src = "assets/moon.png";
    btn.classList.add("dark");
    logo.classList.add("dark");
    map.classList.remove("dark");
  } else {
    console.log("d");
    document.body.classList.remove("light-theme");
    btn.src = "assets/sun.png";
    btn.classList.remove("dark");
    logo.classList.remove("dark");
    map.classList.add("dark");
  }
};

lightThemeMq.addListener(mqCallback);
mqCallback(lightThemeMq);

/**
 * Copyright footer
 */

let year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();

/**
 * Back to top button
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollEndPos = bodyHeight - windowHeight;
  const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

  backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

  // visible back top btn when scrolled 5% of the page
  if (totalScrollPercent > 5) {
    backTopBtn.classList.add("show");
  } else {
    backTopBtn.classList.remove("show");
  }
});
