"use strict";
const navbarToggle = document.querySelector(".navbar-toggle");
const body = document.querySelector("body");
const dropdownLinks = document.querySelectorAll("button.dropdown-btn");
const dropdownItems = document.querySelectorAll("button.dropdown-btn");
const navDropdown = document.querySelector(".nav--header.nav-dropdown");
const navBackBtn = document.querySelector(".back-btn");
const activeSubMenus = document.querySelectorAll(".active");

navbarToggle.addEventListener("click", function () {
  navbarToggle.classList.toggle("toggle");
  if (activeSubMenus) {
    activeSubMenus.forEach((activeSubMenu) => {
      activeSubMenu.classList.remove("active");
    });
  }
});

dropdownLinks.forEach((dropdownBtn) => {
  console.log(dropdownBtn);
  dropdownBtn.addEventListener("click", function (e) {
    const hasSubmenu = this.classList.contains("dropdown-btn");
    // const submenu = this.querySelector(".dropdown-list");

    console.log(this.classList.contains("dropdown-btn"));
    // clickedEl.classList.add("active");
    // console.log(clickedEl);
    console.log(this);
    if (hasSubmenu) {
      const parentEl = this.parentNode;
      console.log(parentEl);
      const submenu = parentEl.querySelector(".dropdown-list");
      const activeSubMenu = parentEl.querySelector(".dropdown-list.active");
      // const activeSubMenu = document.querySelector(".dropdown-list.active");
      // const submenu = this.querySelector(".dropdown-btn+.dropdown-list");
      navBackBtn.classList.remove("hidden");
      submenu.classList.add("active");

      submenu.addEventListener("click", function (e) {
        const deepSubMenu = e.target.nextSibling.nextSibling;
        deepSubMenu.classList.add("active");
      });

      navBackBtn.onclick = () => {
        const activeDeepSubmenu = submenu.querySelector("ul.nav-list.active");
        console.log(submenu.classList.contains("active"));
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
// navDropdown.addEventListener("click", function (event) {});
