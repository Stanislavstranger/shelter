const burgerButton = document.querySelector('#burger__button');
const menuList = document.querySelector('.menu__list');
const headerMenu = document.querySelector('.header__menu');
const blackout = document.querySelector('.blackout');
const headerContainer = document.querySelector('.header__container');
const logoActive = document.querySelector('.logo');
const header = document.querySelector('.header');

const burgerToggle = () => {
    if (burgerButton) {
        burgerButton.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock');
            burgerButton.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
            blackout.classList.toggle('_active');
            headerContainer.classList.toggle('_active');
            logoActive.classList.toggle('_active');
            header.classList.toggle('_active');
        });
    }
}

const burgerClose = () => {
    if (menuList) {
        menuList.addEventListener('click', function (e) {
            document.body.classList.remove('_lock');
            burgerButton.classList.remove('_active');
            headerMenu.classList.remove('_active');
            blackout.classList.remove('_active');
            headerContainer.classList.remove('_active');
            logoActive.classList.remove('_active');
            header.classList.remove('_active');
        });
    }
    blackout.addEventListener('click', function (e) {
        document.body.classList.remove('_lock');
        burgerButton.classList.remove('_active');
        headerMenu.classList.remove('_active');
        blackout.classList.remove('_active');
        headerContainer.classList.remove('_active');
        logoActive.classList.remove('_active');
        header.classList.remove('_active');
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.body.classList.remove('_lock');
            burgerButton.classList.remove('_active');
            headerMenu.classList.remove('_active');
            blackout.classList.remove('_active');
            headerContainer.classList.remove('_active');
            logoActive.classList.remove('_active');
            header.classList.remove('_active');
        }
    });
}

export { burgerToggle };
export { burgerClose };