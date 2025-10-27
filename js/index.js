const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.navbar');
const menu = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('cross');
    menuItems.classList.toggle('open');
    let display;
    if (menuBtn.classList.contains('cross')) {
        display = "block";
    } else {
        display = "none";
    }
    handleNavbar(display);
});

let mediaQuery = window.matchMedia("(min-width: 1100px)");
mediaQuery.addEventListener('change', () => {
    let display;
    if (mediaQuery.matches) {
        display = "block";
    } else if (menuBtn.classList.contains('cross')){
        display = "block";
    } else {
        display = "none";
    }
    handleNavbar(display);
});

function handleNavbar(display) {
    menu.forEach(a => a.style.display = display);
}

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('down', window.scrollY > 0);
});

// ----------------- Scroll to top button ----------------- //

const btnScrollToTop = document.querySelector('#btnScrollToTop');

function toggleScrollButton() {
    if (window.scrollY >= 500) {
        btnScrollToTop.classList.remove('hidden');
        btnScrollToTop.classList.add('visible');
    } else {
        btnScrollToTop.classList.remove('visible');
        btnScrollToTop.classList.add('hidden');
    }
  }

window.addEventListener('scroll', toggleScrollButton);

btnScrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});