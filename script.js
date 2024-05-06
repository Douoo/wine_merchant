"use strict";
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav");
const navbarToggle = document.querySelector(".navbar-toggle");
const dropdownLinks = document.querySelectorAll("button.dropdown-btn");
const navDropdown = document.querySelector(".nav--header.nav-dropdown");
const navBackBtn = document.querySelector(".back-btn");
const activeSubMenus = document.querySelectorAll(".active");

const searchBtn = document.querySelector("[data-search]");
const searchField = document.querySelector("[data-search-field]");

navbarToggle.addEventListener("click", function () {
  navMenu.classList.toggle("toggle");
  if (activeSubMenus) {
    activeSubMenus.forEach((activeSubMenu) => {
      activeSubMenu.classList.remove("active");
    });
  }
});

dropdownLinks.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener("click", function (e) {
    const hasSubmenu = this.classList.contains("dropdown-btn");

    if (hasSubmenu) {
      const parentEl = this.parentNode;

      const submenu = parentEl.querySelector(".dropdown-list");
      const activeSubMenu = parentEl.querySelector(".dropdown-list.active");

      navBackBtn.classList.remove("hidden");
      submenu.classList.add("active");

      submenu.addEventListener("click", function (e) {
        const deepSubMenu = e.target.nextSibling.nextSibling;
        deepSubMenu.classList.add("active");
      });

      navBackBtn.onclick = () => {
        const activeDeepSubmenu = submenu.querySelector("ul.nav-list.active");

        if (activeDeepSubmenu) {
          activeDeepSubmenu.classList.remove("active");
          return;
        }
        if (submenu.classList.contains("active")) {
          submenu.classList.remove("active");
          return;
        }
        if (!activeDeepSubmenu || !submenu.classList.contains("active")) {
          navBackBtn.classList.add("hidden");
        }
      };
    }
  });
});

searchBtn.onclick = () => {
  searchField.classList.toggle("hidden");
  navbar.classList.toggle("hidden");
};

searchField.addEventListener("click", function (e) {
  const clickedEl = e.target;
  if (
    clickedEl.tagName == "INPUT" ||
    clickedEl.tagName === "A" ||
    clickedEl.classList.contains("icon-search")
  ) {
    //Nothing is gonna happen
  } else {
    searchField.classList.toggle("hidden");
    navbar.classList.toggle("hidden");
  }
});
