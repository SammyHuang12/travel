console.log("swiper js");
const travel_swiper = new Swiper(".travel-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next-travel",
        prevEl: ".swiper-button-prev-travel",
    },
});