// swiper element
const swiperEl = document.querySelector('swiper-container');

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();