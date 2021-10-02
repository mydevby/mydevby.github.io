var mapInfoSwiper = new Swiper('.map__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        460: {
          slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
      },
    pagination: {
        el: '.map__swiper-pagination',
    },
});

mapInfoSwiper.on('slideChange', function () {
    var oldActiveMarker = document.querySelector('.map__marker-wrapper--active');
    var newActiveMarker = document.querySelectorAll('.map__marker-wrapper')[mapInfoSwiper.realIndex];
    oldActiveMarker.classList.remove('map__marker-wrapper--active');
    newActiveMarker.classList.add('map__marker-wrapper--active');
});