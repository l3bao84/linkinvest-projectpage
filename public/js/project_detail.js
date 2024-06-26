
document.querySelectorAll(".gallery__tabs-item").forEach((tab) => {
  tab.addEventListener("click", () => {
      document.querySelectorAll(".gallery__tabs-item").forEach((item) => {
          item.classList.remove("gallery__tabs-item--active");
      });

      tab.classList.add("gallery__tabs-item--active");
      if(tab.classList.contains("gallery__tabs-item-more")) {
        document.querySelector('.gallery__tabs-item-box').classList.toggle("gallery__tabs-item-box--active")
      }
  });
});

document.querySelectorAll(".gallery__tabs-item-box span").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.stopPropagation();
    if(document.querySelector('.gallery__tabs-item-box').classList.contains("gallery__tabs-item-box--active")) {
      document.querySelector('.gallery__tabs-item-box').classList.remove("gallery__tabs-item-box--active")
    }
  });  
});

document.querySelector(".content__investor-header").addEventListener("click", () => {
  document.querySelector(".content__investor-content").classList.toggle("content__investor-content--active")
  document.querySelector(".content__investor-header-icon i").classList.toggle("icon--active")
})

document.querySelectorAll(".content__qa-box-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".fa-solid");

    if (icon) {
      icon.classList.toggle("fa-minus");
      icon.classList.toggle("fa-plus");
    }
    answer.classList.toggle('content__qa-box-answer--active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelector('.gallery__tabs');
  var header = document.querySelector('.header');

  if (tabs && header) {
    var tabsOffsetTop = tabs.offsetTop;

    window.addEventListener('scroll', function() {
      if (window.scrollY > tabsOffsetTop - header.offsetHeight) {
        tabs.classList.add('sticky');
      } else {
        tabs.classList.remove('sticky');
      }
    });
  }
});



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

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("content__project-img-element");
//   let dots = document.getElementsByClassName("demo");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   //captionText.innerHTML = dots[slideIndex - 1].alt;
// }

var menuBar = document.getElementById("mobile__menu");
var toggleMenuButton = document.getElementById("menuBar");

toggleMenuButton.addEventListener("click", function () {
  if (menuBar.style.right === "0px") {
    menuBar.style.right = "-80vw";
  } else {
    menuBar.style.right = "0";
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 60,
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
    1440: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    50: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

