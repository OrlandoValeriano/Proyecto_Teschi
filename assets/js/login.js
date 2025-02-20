
/*=============== SHOW REGISTER ===============*/
const register = document.getElementById('login-register'),
      registerContainer = document.getElementById('register-container'),
      login = document.getElementById('register-login'),
      loginContainer = document.getElementById('login-container');

register.addEventListener('click', () => {
    registerContainer.classList.add('show-register');
    loginContainer.classList.add('remove-login');
});

login.addEventListener('click', () => {
    registerContainer.classList.remove('show-register');
    loginContainer.classList.remove('remove-login');
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animation repeat
});

sr.reveal('.login__container');