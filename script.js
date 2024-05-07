"use strict";
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav");
const navbarToggle = document.querySelector(".navbar-toggle");
const dropdownLinks = document.querySelectorAll("button.dropdown-btn");
const navDropdown = document.querySelector(".nav--header.nav-dropdown");
const navBackBtn = document.querySelector(".back-btn");
const activeSubMenus = document.querySelectorAll(".active");

const searchBtnMobile = document.querySelector("[data-search]");
const searchBtnDesktop = document.querySelector("[data-search-desktop]");
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

searchBtnMobile.onclick = () => {
  searchField.classList.toggle("hidden");
  navbar.classList.toggle("hidden");
};

searchBtnDesktop.onclick = () => {
  console.log("tes");
  searchField.classList.toggle("hidden");
  navbar.classList.toggle("hidden");
};

searchField.addEventListener("click", function (e) {
  console.log("Test");
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

const accordion = document.querySelector(".footer");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".collapsable");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  panelToActivate.classList.toggle("toggle");
}
