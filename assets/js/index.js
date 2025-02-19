/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);

/*=============== CLOSE MODAL WINDOW ===============*/
const modalWindow = document.getElementById('modal-information'),
modalClose = document.getElementById('modal-close');
modalWindow.showModal();

modalClose.addEventListener('click', () => {
    modalWindow.close();
});

/*=============== SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animation repeat
});

sr.reveal('.modal__container, .footer__container');
sr.reveal('.home__cards', {delay: 600, distance: '100px', interval: 100});
sr.reveal('.home__data', {origin: 'left'});
sr.reveal('.footer__group', {interval: 200});