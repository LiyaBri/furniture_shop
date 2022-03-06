if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1, //показ одного слайдера
        spaceBetween: 32, //отсутпы между слайдами
        watchOverflow: true,
        speed: 800,
        loop: true, //бесконечный слайдер
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        //Dotts
        pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
        },
        //arrows
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
        }
    });
}


if (document.querySelector('.slider-rooms__body')) {
    new Swiper('.slider-rooms__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto', //показ одного слайдера
        spaceBetween: 24, //отсутпы между слайдами
        watchOverflow: true,
        speed: 800,
        loop: true, //бесконечный слайдер
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        //Dotts
        pagination: {
            el: '.slider-rooms__dotts',
            clickable: true,
        },
        //arrows
        navigation: {
            nextEl: '.slider-rooms .slider-arrow_next',
            prevEl: '.slider-rooms .slider-arrow_prev',
        }
    });
}

if (document.querySelector('.slider-tips__body')) {
    new Swiper('.slider-tips__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 3, //показ одного слайдера
        spaceBetween: 32, //отсутпы между слайдами
        watchOverflow: true,
        speed: 800,
        loop: true, //бесконечный слайдер
        //Dotts
        pagination: {
            el: '.slider-tips__dotts',
            clickable: true,
        },
        //arrows
        navigation: {
            nextEl: '.slider-tips .slider-arrow_next',
            prevEl: '.slider-tips .slider-arrow_prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        }
    });
}