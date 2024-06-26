var scrollToTopButton = document.querySelector(".onscroll");
var supportButton = document.querySelector(".support__btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "flex";
    supportButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
    supportButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToTopButton.style.display = "none";
supportButton.style.display = "none";

var menuBar = document.getElementById("mobile__menu");
var toggleMenuButton = document.getElementById("menuBar");

toggleMenuButton.addEventListener("click", function () {
  if (menuBar.style.right === "0px") {
    menuBar.style.right = "-80vw";
  } else {
    menuBar.style.right = "0";
  }
});

var swiper = new Swiper(".related__news-body", {
  slidesPerView: 4,
  spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
  navigation: {
    nextEl: ".related__news-button-next",
    prevEl: ".related__news-button-prev",
  },
  loop: true,
  centeredSlides: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    50: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
