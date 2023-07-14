$('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    items:1
})


//
const menuItems = document.querySelectorAll('#site-menu a');

const grid = document.querySelector('.grid');
const msnry = new Masonry(grid, {
  itemSelector: '.grid-item',
});

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    menuItems.forEach(menuItem => {
      menuItem.classList.remove('active');
    });
    item.classList.add('active');
    const target = item.getAttribute('data-target');
    const tabs = document.querySelectorAll('.grid-item');
    tabs.forEach(tab => {
      if (tab.classList.contains(target)) {
        tab.classList.remove('hidden');
      } else {
        tab.classList.add('hidden');
      }
    });
    msnry.layout();
  });
});

//
