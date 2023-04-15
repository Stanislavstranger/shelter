/* Read json data from the file */

let pets;

fetch("../../../assets/json/pets.json") //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
        pets = data;
        /* console.log(pets); */
    });

/* Slider */

(function () {
    let cards = document.querySelectorAll('.card');
    let buttonSlider = document.querySelectorAll('.button-slider');
    let prevCards = [];

    /* Create slider card */

    function createCard() {
        setTimeout(function () {
            let sliderArray = createUniqueArray(3);
            for (i = 0; i < cards.length; i++) {
                cards[i].innerHTML = `<img src="${pets[sliderArray[i]].img}" alt=${pets[sliderArray[i]].name} class="popup-link">
            <h3>${pets[sliderArray[i]].name}</h3>
            <button class="button border">Learn more</button>`;
                cards[i].id = sliderArray[i];
            }
            ;
        }, 300);
    }

    createCard();

    /* Create unique array slider card */

    function createUniqueArray(count) {
        let array = [];
        for (i = 0; array.length < count; i++) {
            let elem = Math.floor(Math.random() * 8)
            if (!array.includes(elem) && !prevCards.includes(elem)) {
                array.push(elem)
            }
        }
        prevCards = array.slice();
        return array;
    }

  /* Navigation with ArrowRight and ArrowLeft */

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        createCard()
    }
});

    /* Slide movement */

    function slider() {
        for (i = 0; i < buttonSlider.length; i++) {
            buttonSlider[i].onclick = function () {
                if (this.id === 'slide-next') {
                    createCard()
                }
                if (this.id === 'slide-previous') {
                    createCard()
                }
            }
        }
    }

    slider()

}());