document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurger = Array.prototype.slice.call(document.querySelectorAll('.navbar__hamburger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurger.length > 0) {

    // Add a click event on each of them
    $navbarBurger.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = document.querySelector(".navbar__menu");

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        target.classList.toggle('is-active');

      });
    });
  }

});
