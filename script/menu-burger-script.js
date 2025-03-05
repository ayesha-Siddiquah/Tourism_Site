"use strict";

document.querySelector(".menu-burger").addEventListener("click", function() {
    var sidebar = document.querySelector(".side-bar"); 
    sidebar.style.display = "flex";
    document.querySelector(".menu-burger").style.display = "none";
  });

  document.querySelector(".close-icon").addEventListener("click", function() {
    var sidebar = document.querySelector(".side-bar"); 
    sidebar.style.display = "none";
    document.querySelector(".menu-burger").style.display = "flex";
  });