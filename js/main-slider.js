const mainSlider = new Swiper(".hero-slider .swiper", {
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-navigation__button--next",
        prevEl: ".swiper-navigation__button--prev"
    },

    pagination: {
        el: ".swiper-pagination",
        type: 'fraction',
        formatFractionCurrent: function (num) {
            return String(num).padStart(2, 0);
        },
        formatFractionTotal: function (num) {
            return String(num).padStart(2, 0);
        },
    },
})

const featuresSlider = new Swiper(".features .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 3,
     navigation: {
        nextEl: ".features-slider__button--next",
        prevEl: '.features-slider__button--prev'
    }, 
    observer: true,
    observeParents: true,
}
   
    )

