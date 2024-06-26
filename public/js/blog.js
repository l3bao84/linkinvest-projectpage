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

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".pagi-prev");
  const nextButton = document.querySelector(".pagi-next");
  const pageButtons = document.querySelectorAll(".pagi-number");

  let currentPage = 1;
  const totalPages = pageButtons.length;

  function updateButtons() {
    if (currentPage === 1) {
      prevButton.classList.remove("pagi-button--active");
    } else {
      prevButton.classList.add("pagi-button--active");
    }

    if (currentPage === totalPages) {
      nextButton.classList.remove("pagi-button--active");
    } else {
      nextButton.classList.add("pagi-button--active");
    }

    pageButtons.forEach((button, index) => {
      if (index === currentPage - 1) {
        button.classList.add("pagi-number--active");
      } else {
        button.classList.remove("pagi-number--active");
      }
    });
  }

  pageButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentPage = index + 1;
      updateButtons();
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateButtons();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateButtons();
    }
  });

  updateButtons();
});

document.querySelectorAll(".pagi-number").forEach((page) => {
  page.addEventListener("click", () => {
    document.querySelectorAll(".pagi-number").forEach((item) => {
      item.classList.remove("pagi-number--active");
    });

    page.classList.add("pagi-number--active");
  });
});
