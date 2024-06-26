document.querySelectorAll(".custom-select-wrapper").forEach((wrapper) => {
  const select = wrapper.querySelector(".custom-select");
  const trigger = select.querySelector(".custom-select__trigger");
  const options = select.querySelectorAll(".custom-select__option");

  trigger.addEventListener("click", () => {
    select.classList.toggle("custom-select--open");
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      const selectedOption = select.querySelector(
        ".custom-select__option--selected"
      );
      if (selectedOption) {
        selectedOption.classList.remove("custom-select__option--selected");
      }
      option.classList.add("custom-select__option--selected");
      trigger.querySelector("span").textContent = option.textContent;
      select.classList.remove("custom-select--open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!select.contains(event.target)) {
      select.classList.remove("custom-select--open");
    }
  });
});

var menuBar = document.getElementById("mobile__menu");
var toggleMenuButton = document.getElementById("menuBar");
var closeMenuButton = document.getElementById("closeBar");
var scrollToTopButton = document.querySelector(".onscroll");
var supportButton = document.querySelector(".support__btn");

toggleMenuButton.addEventListener("click", function () {
  menuBar.style.right = "0";
  toggleMenuButton.style.display = "none";
  closeMenuButton.style.display = "block";
});

closeMenuButton.addEventListener("click", function () {
  menuBar.style.right = "-80vw";
  toggleMenuButton.style.display = "block";
  closeMenuButton.style.display = "none";
});

// Add an event listener for the scroll event
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Show buttons after scrolling 200px
    scrollToTopButton.style.display = "flex";
    supportButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
    supportButton.style.display = "none";
  }
});

// Add an event listener for the click event on the scroll-to-top button
scrollToTopButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action of the anchor tag
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll to top
  });
});

// Ensure the buttons are initially hidden
scrollToTopButton.style.display = "none";
supportButton.style.display = "none";
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
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
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
        slidesPerView: 3,
        spaceBetween: 30,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 20,
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
        spaceBetween: 20,
      },
      100: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
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

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
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
        slidesPerView: 3,
        spaceBetween: 30,
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
document.addEventListener("DOMContentLoaded", (event) => {
  const tabs = document.querySelectorAll(".search__tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the active class from all tabs
      tabs.forEach((t) => t.classList.remove("search__tab--active"));

      // Add the active class to the clicked tab
      this.classList.add("search__tab--active");
    });
  });

  const spotlight_tabs = document.querySelectorAll(".spotlight__tabs-element");

  spotlight_tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the active class from all tabs
      spotlight_tabs.forEach((t) =>
        t.classList.remove("spotlight__tabs-element--active")
      );

      // Add the active class to the clicked tab
      this.classList.add("spotlight__tabs-element--active");
    });
  });

  const nav = document.querySelector(".nav");
  const navLogo = document.getElementById("nav-logo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      navLogo.src = "../assets/logo.png";
    } else {
      nav.classList.remove("scrolled");
      navLogo.src = "../assets/logo-white.png";
    }
  });
});
