document.addEventListener('DOMContentLoaded', () => {
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
});
