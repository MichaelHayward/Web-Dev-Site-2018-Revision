document.addEventListener("DOMContentLoaded", () => {
  contactHide();
  hamburger();
});

function contactHide() {
  // Get all relevant elements
  const $emailHides = Array.prototype.slice.call(document.querySelectorAll('.email-hide'), 0);
  const $phoneHides = Array.prototype.slice.call(document.querySelectorAll('.phone-hide'), 0);

  // Check if there email hide elements
  if ($emailHides.length > 0) {

    $emailHides.forEach( el => {
      // Build the email text here
      const user = "mikebuildswebsites";
      const provider = "gmail";
      const ending = "com";
      const address = `${user}@${provider}.${ending}`;
      // Apply the HTML and link attribute
      el.innerHTML = address;
      el.setAttribute("href", `mailto:${address}`);
    });
  }

  if ($phoneHides.length > 0) {

    $phoneHides.forEach( el => {
      // build the number here
      const country = "+44";
      const remainder = "7858750238";
      const visNumber = `${country} (0) ${remainder}`;
      const number = `${country}${remainder}`;
      // Apply the HTML and link attribute
      el.innerHTML = visNumber;
      el.setAttribute("href", `tel:${number}`);
    });
  }
};

function hamburger() {
  // Get all "navbar-burger" elements
  const $navbarBurger = Array.prototype.slice.call(document.querySelectorAll('.navbar__hamburger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurger.length > 0) {

    // Add a click event on each of them
    $navbarBurger.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target
        const target = document.querySelector(".navbar__menu");

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        target.classList.toggle('is-active');
      });
    });
  }
};
