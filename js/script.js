function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

const headerBurger = document.querySelector('.header__burger');
const headerTopBody = document.querySelector('.header-top__body');
if (headerBurger) {
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        headerTopBody.classList.toggle('active');
        document.body.classList.toggle('body-lock');
    });
}

const organizeBlockBtns = document.querySelectorAll('.organize-block__btn');
if (organizeBlockBtns.length > 0) {
    organizeBlockBtns.forEach((el) => {
        el.addEventListener('click', () => {
            const preview = el.parentNode.querySelector('.organize-block__preview');
            const width = preview.clientWidth;

            if (el.parentNode.classList.contains('active')) {
                preview.style.transform = 'rotate(-180deg)';
                el.style.transform = 'translateY(-50%)';
                el.parentNode.classList.remove('active');
            } else {
                el.style.transform = `translateY(-50%) translate(${width}px, 0px)`;
                preview.style.transform = `rotate(-180deg) translate(-${width}px, 0px)`;
                el.parentNode.classList.add('active');
            }
        });
    });
}

function organizeBtn(el) {
    if (el.parentNode.classList.contains('active')) {
        const preview = el.parentNode.querySelector('.organize-block__preview');
        const width = preview.clientWidth;

        el.style.transform = `translateY(-50%) translate(${width}px, 0px)`;
        preview.style.transform = `rotate(-180deg) translate(-${width}px, 0px)`;
    }
}

window.addEventListener('resize', () => {
    if (organizeBlockBtns.length > 0) {
        organizeBlockBtns.forEach((el) => {
            organizeBtn(el);
        });
    }
});

new Swiper('.foto-slider', {
    navigation: {
        nextEl: '.foto-slider__next',
        prevEl: '.foto-slider__prev',
    },
    loop: true,
    thumbs: {
        swiper: {
            el: '.foto-mini',
            breakpoints: {
                450: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        },
    },
});
