const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link-element");

function handleScroll() {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    navLinks.forEach((link) => {
      link.classList.remove("nav__link-element--active");
    });
  } else {
    nav.classList.remove("scrolled");
    navLinks.forEach((link) => {
      link.classList.remove("nav__link-element--scroll-active");
    });
  }
}

function handleClick(event) {
  const isScrolled = window.scrollY > 50;

  navLinks.forEach((link) => {
    if (isScrolled) {
      link.classList.remove("nav__link-element--scroll-active");
    } else {
      link.classList.remove("nav__link-element--active");
    }
  });

  if (isScrolled) {
    event.target.classList.add("nav__link-element--scroll-active");
  } else {
    event.target.classList.add("nav__link-element--active");
  }
}

window.addEventListener("scroll", handleScroll);

navLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});

var scrollToTopButton = document.querySelector(".onscroll");
var supportButton = document.querySelector(".support__btn");

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".header__logo-pc");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    logo.src = "../assets/logo.png";
  } else {
    nav.classList.remove("scrolled");
    logo.src = "../assets/logo-white.png";
  }

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

document.querySelectorAll(".project__tab-element").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".project__tab-element").forEach((item) => {
      item.classList.remove("project__tab-element--active");
    });

    tab.classList.add("project__tab-element--active");
  });
});

// pc
document.querySelectorAll(".search__tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".search__tab").forEach((item) => {
      item.classList.remove("search__tab--active");
    });

    tab.classList.add("search__tab--active");
  });
});

//mobile
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.remove("tab--active");
    });

    tab.classList.add("tab--active");
  });
});

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

toggleMenuButton.addEventListener("click", function () {
  if (menuBar.style.right === "0px") {
    menuBar.style.right = "-80vw";
  } else {
    menuBar.style.right = "0";
  }
});
