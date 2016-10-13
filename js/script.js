var navToggle = document.querySelector(".main-menu__toggle");
var nav = document.querySelector(".main-menu");
var link = document.querySelectorAll(".main-menu__item");

nav.classList.remove("main-menu--nojs");

navToggle.addEventListener("click",function(event) {
   event.preventDefault();
   if (nav.classList.contains("main-menu--closed")) {
    nav.classList.remove("main-menu--closed");
    nav.classList.add("main-menu--opened");
   } else {
    nav.classList.add("main-menu--closed");
    nav.classList.remove("main-menu--opened");
   }
});

if (link !== null) {for(var f=0; f<link. length; f++){ link[f].addEventListener("click",function() {
  nav.classList.add("main-menu--closed");
  nav.classList.remove("main-menu--opened");
});}}
