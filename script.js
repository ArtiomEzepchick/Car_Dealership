let button = document.querySelector(".nav-car-models-catalogue-button");
let catalogue = document.querySelector(".nav-car-models-catalogue")
let btnOpenNav = document.querySelector(".menu-button");
let navOpen = document.querySelector(".nav-main-container");

button.addEventListener("click", () => {
  catalogue.classList.toggle("open");
});

window.addEventListener("click", (e) => {
  if (e.target.classList !== "nav-car-models-catalogue") {
    if (e.target !== button) {
      catalogue.classList.remove("open");
    }
  }
});

let btnUp = $('#button-page-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    btnUp.addClass('show');
  } else {
    btnUp.removeClass('show');
  }
});

btnUp.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

btnOpenNav.addEventListener("click", () => {
  navOpen.classList.toggle("open");
  document.querySelector('.menu-button span').classList.toggle('active')
});




