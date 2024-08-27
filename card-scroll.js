var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      590:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
          800:{
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
    }

  });