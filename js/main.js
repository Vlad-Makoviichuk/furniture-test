const scrollUpBtnRef = document.querySelector('.scroll-up__button');

scrollUpBtnRef.addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    })

})

window.addEventListener('scroll', function () {
    const windowOffset = window.pageYOffset;
    const nextHeroRef = document.querySelector('.next');
    const heroOffset = nextHeroRef.getBoundingClientRect().y;

    if (windowOffset > heroOffset) {
        scrollUpBtnRef.classList.add('fixed');
    } else {
        scrollUpBtnRef.classList.remove('fixed');
    }
})