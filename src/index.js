import "./styles.css";

const closeBtn = document.querySelector(".close-btn");
const sideNav = document.querySelector(".side-nav-container");
const openBtn = document.querySelector(".open-nav");

openBtn.addEventListener("click", () => {
  sideNav.style.transform = `translateX(0)`;
  sideNav.style.transition = `transform 1s ease-in`;
  openBtn.style.zIndex = "-1";
});

closeBtn.addEventListener("click", () => {
  console.log("clicked me");
  sideNav.style.transform = `translateX(-100%)`;
  sideNav.style.transition = `transform 1s ease-out`;
  openBtn.style.zIndex = "2";
  console.log(sideNav.style);
});
