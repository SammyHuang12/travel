console.log("swiper js");

const banner_swiper = new Swiper(".banner-swiper", {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
        delay: 4000, // 延遲 5 秒
        disableOnInteraction: false, // 用戶操作後是否停止 (false 為不停止)
    },
    loop: true, // 循環播放，確保無限輪播
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

const travel_swiper = new Swiper(".travel-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next-travel",
        prevEl: ".swiper-button-prev-travel",
    },
});