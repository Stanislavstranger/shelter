let paginationCount = 1;
const paginationButtons = document.querySelectorAll('.pagination');
let screenSize = window.innerWidth; console.log(screenSize);

/* Create pets array */

let petsArr = createArrAllCards();

function createArrAllCards() {
    let arr = [];
    while (!(arr.length === 48)) {
        arr.push(...createArrCards(8))
    }
    return arr;
}

console.log(petsArr);

/* Create random cards pets array */

function createArrCards(count) {
    let arr = [];
    for (i = 0; arr.length < count; i++) {
        let elem = Math.floor(Math.random() * 8)
        if (!arr.includes(elem)) {
            arr.push(elem)
        }
    }
    return arr;
}

/* Determining cards count */

function cardsCount() {
    if (screenSize < 768) {
        return 3;
    } else if (screenSize >= 768 && screenSize < 1280) {
        return 6;
    } else if (screenSize >= 1280)
        return 8;
}

console.log(cardsCount());

/* Determining page variable count */

function pageVariableCount() {
    if (screenSize < 768) {
        return 16;
    } else if (screenSize >= 768 && screenSize < 1280) {
        return 8;
    } else if (screenSize >= 1280)
        return 6;
}

/* Variable index */

function index() {
    return (48 / pageVariableCount() * (paginationCount - 1))
}

/* Create Cards */

function createCards() {
    const container = document.querySelector('.cards__container');
    container.innerHTML = '';

    for (let i = 0; i < cardsCount(); i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        container.appendChild(div);
    }
}

createCards();

/* Selecting all cards */

const cards = document.querySelectorAll('.card');

/* Create Card */

/* console.log(cards);
console.log(petsArr[8]);
console.log(index());
console.log(pets); */

function createCard() {
    setTimeout(function () {
        for (i = 0; i < cards.length; i++) {
            cards[i].innerHTML = `<img src="${pets[petsArr[i + index()]].img}" alt=${pets[petsArr[i + index()]].name}>
            <h3>${pets[petsArr[i + index()]].name}</h3>
            <button class="button border">Learn more</button>`;
            cards[i].id = [petsArr[i + index()]];
        }
    }, 300);
}

createCard();

/* Get number page */

function numberPage() {
    for (i = 0; i < paginationButtons.length; i++) {
        paginationButtons[i].addEventListener('click', function () {
            if (this.id === 'next' && paginationCount < pageVariableCount()) {
                paginationCount += 1;
                createCard();
                slideLeft();
            } else if (this.id === 'previous' && paginationCount > 1) {
                paginationCount -= 1;
                createCard();
                slideRight()
            } else if (this.id === 'first-page' && paginationCount > 1) {
                paginationCount = 1;
                createCard();
                slideLeft();
            } else if (this.id === 'last-page' && paginationCount < 16) {
                paginationCount = pageVariableCount();
                createCard();
                slideLeft();
            }
            document.getElementById('actual-page').innerHTML = `<h4>${paginationCount}</h4>`;
            if (paginationCount > 1) {
                document.getElementById('first-page').classList.remove('_inactive')
                document.getElementById('previous').classList.remove('_inactive')
            }
            if (paginationCount === 1) {
                document.getElementById('first-page').classList.add('_inactive')
                document.getElementById('previous').classList.add('_inactive')
            }
            if (paginationCount === pageVariableCount()) {
                document.getElementById('last-page').classList.add('_inactive')
                document.getElementById('next').classList.add('_inactive')
            }
            if (paginationCount < pageVariableCount()) {
                document.getElementById('last-page').classList.remove('_inactive')
                document.getElementById('next').classList.remove('_inactive')
            }
        });
    }
}

function slideLeft() {
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.add('slide-left');
    }
    setTimeout(function () {
        for (i = 0; i < cards.length; i++) {
            cards[i].classList.remove('slide-left');
        };
    }, 300);
}

function slideRight() {
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.add('slide-right');
    }
    setTimeout(function () {
        for (i = 0; i < cards.length; i++) {
            cards[i].classList.remove('slide-right');
        };
    }, 300);
}

numberPage();