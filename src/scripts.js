// src/scripts.js
if (typeof window !== 'undefined') {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("t-co.re è pronto!");
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
    if (document.querySelector('#particles-js')) {
      particlesJS.load('particles-js', '/assets/data/particles.json', function () {
        console.log('callback - particles.js config loaded');
      });
    }
    if (document.querySelector('#background-div')) {
      particlesJS.load('background-div', '/assets/data/particles.json', function () {
        console.log('callback - particles.js config loaded');
      });
    }
  });
}
