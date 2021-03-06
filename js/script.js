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
        document.body.classList.toggle('_lock');
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

new Swiper('.weekend__slider', {
    navigation: {
        nextEl: '.weekend__next',
        prevEl: '.weekend__prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    preloadImages: false,
    breakpoints: {
        650: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
});

new Swiper('.foto-slider', {
    navigation: {
        nextEl: '.foto-slider__next',
        prevEl: '.foto-slider__prev',
    },
    loop: true,
    preloadImages: false,
    thumbs: {
        swiper: {
            el: '.foto-mini',
            preloadImages: false,
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

new Swiper('.info-paintball__slider', {
    navigation: {
        nextEl: '.info-paintball__next',
        prevEl: '.info-paintball__prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    preloadImages: false,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        870: {
            slidesPerView: 3,
        },
        1140: {
            slidesPerView: 4,
        },
    },
});

new Swiper('.info-lasertag__slider', {
    navigation: {
        nextEl: '.info-lasertag__next',
        prevEl: '.info-lasertag__prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    preloadImages: false,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        870: {
            slidesPerView: 3,
        },
    },
});

new Swiper('.area1__slider', {
    navigation: {
        nextEl: '.area1__next',
        prevEl: '.area1__prev',
    },
    loop: true,
    preloadImages: false,
    thumbs: {
        swiper: {
            el: '.area1-mini',
            slidesPerView: 2,
            spaceBetween: 30,
            preloadImages: false,
            breakpoints: {
                500: {
                    slidesPerView: 3,
                },
            },
        },
    },
});

new Swiper('.area2__slider', {
    navigation: {
        nextEl: '.area2__next',
        prevEl: '.area2__prev',
    },
    loop: true,
    preloadImages: false,
    thumbs: {
        swiper: {
            el: '.area2-mini',
            slidesPerView: 2,
            spaceBetween: 30,
            preloadImages: false,
            breakpoints: {
                500: {
                    slidesPerView: 3,
                },
            },
        },
    },
});

new Swiper('.companies-slider__top', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.companies__next',
        prevEl: '.companies__prev',
    },
    preloadImages: false,
    breakpoints: {
        420: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 5,
        },
    },
});

new Swiper('.companies-slider__bottom', {
    slidesPerView: 1,
    preloadImages: false,
    navigation: {
        nextEl: '.companies__next',
        prevEl: '.companies__prev',
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 5,
        },
    },
});

new Swiper('.uniform__slider', {
    slidesPerView: 1,
    preloadImages: false,
    navigation: {
        nextEl: '.uniform__next',
        prevEl: '.uniform__prev',
    },
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        720: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 4,
        },
    },
});

new Swiper('.relax__slider', {
    navigation: {
        nextEl: '.relax__next',
        prevEl: '.relax__prev',
    },
    loop: true,
    preloadImages: false,
    thumbs: {
        swiper: {
            el: '.relax-mini',
            slidesPerView: 2,
            direction: 'horizontal',
            spaceBetween: 30,
            preloadImages: false,
            breakpoints: {
                500: {
                    slidesPerView: 3,
                    direction: 'vertical',
                },
            },
        },
    },
});

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];

        popupLink.addEventListener('click', (e) => {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.popup__close');

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];

        el.addEventListener('click', (e) => {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup._open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }

        curentPopup.classList.add('_open');
        curentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('_open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('body-lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }

        body.style.paddingRight = '0px';
        body.classList.remove('body-lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            let node = this;
            while (node) {
                if (node.matches(css)) {
                    return node;
                } else {
                    node = node.parentElement;
                }
            }
            return null;
        };
    }
})();

(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
