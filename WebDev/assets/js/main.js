window.addEventListener('DOMContentLoaded', (function () {
  let aside = document.querySelector('aside');

  function scrolled() {


    // Check if scrollLeft has reached or exceeded the total scroll width
    if (aside.scrollLeft + aside.clientWidth >= aside.scrollWidth) {
      aside.scrollLeft = 0;  // Reset scrollLeft to 0
    } else {
      aside.scrollLeft += 300;  // Adjust the increment as needed

    }

    // Log the total scroll width
  }

  setInterval(scrolled, 2000);
  const figcaption = document.querySelectorAll('figcaption');
  for (let a of figcaption) {
    a.remove()
  }
  const boostrapIconPlus = document.querySelectorAll('.bi-cart-plus');
  for (let a of boostrapIconPlus) {
    a.classList.remove('bi-cart-plus');
  }

  const boostrapIconMinus = document.querySelectorAll('.bi-dash');
  for (let a of boostrapIconMinus) {
    a.classList.remove('bi-dash');
  }
  const filter = document.querySelector('.bi-sliders2');
  filter.addEventListener('click', function () {
    //const ulElements = document.querySelector('[data-filter-categories]');
    const filterContent = document.querySelector('.filterContent');
    filterContent.classList.toggle('active')
  })
  const nav = document.querySelector('nav');

})())