const burgerButton = document.querySelector('#burger__button');

const burgerFunctionality = () => {
    if (burgerButton) {
        const headerMenu = document.querySelector('.header__menu');
        const header = document.querySelector('.header');
        const headerContainer = document.querySelector('.header__container');
        const logoActive = document.querySelector('.logo');
        burgerButton.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock');
            burgerButton.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
            header.classList.toggle('_active');
            headerContainer.classList.toggle('_active');
            logoActive.classList.toggle('_active');
        });
    }
}

burgerFunctionality();
