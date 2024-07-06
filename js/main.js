const menuToggle = document.querySelector(".toggle-menu input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;
let isScrolling = false;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Set isScrolling to true on the first scroll event
  if (!isScrolling && scrollTop > 0) {
    isScrolling = true;
  }

  // Only hide/show navbar after scrolling starts
  if (isScrolling) {
    if (scrollTop > lastScrollTop) {
      navbar.style.transform = "translateY(-100%)"; // Hide the navbar
    } else {
      navbar.style.transform = "translateY(0)"; // Show the navbar
    }
  }

  lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".menu-dropdown");
  const bigMenu = document.querySelector(".big-menu");
  const iconPath = document.querySelector(".icon-dropdown path");

  dropdown.addEventListener("mouseover", function () {
    bigMenu.style.display = "block";
    iconPath.style.fill = "red";
  });

  dropdown.addEventListener("mouseout", function () {
    bigMenu.style.display = "none";
    iconPath.style.fill = "black";
    iconPath.style.transform = "rotate(0deg)";
  });
});
