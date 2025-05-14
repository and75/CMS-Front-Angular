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

  // function initBootstrapComponents() {
  //   const dropdowns = document.querySelectorAll('[data-bs-toggle="dropdown"]');
  //   dropdowns.forEach(el => new bootstrap.Dropdown(el));

  //   const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
  //   console.log('sticazzi', dropdownElementList)
  //   const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
  
  //   const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltips.forEach(el => new bootstrap.Tooltip(el));
  
  //   const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
  //   popovers.forEach(el => new bootstrap.Popover(el));
  // }
  
  // // Inizializzazione iniziale
  // document.addEventListener('DOMContentLoaded', initBootstrapComponents);
  
  // // Esportiamo per poterla richiamare dai componenti Angular
  // window.initBootstrapComponents = initBootstrapComponents;
  