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

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the active class from all tabs
      tabs.forEach((t) => t.classList.remove("tab--active"));

      // Add the active class to the clicked tab
      this.classList.add("tab--active");
    });
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    centeredSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});
