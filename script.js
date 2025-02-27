//intitialize swiper instance
const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    autoplay: {
        delay: 400
    },
    navigation: {
        prevEl: "#slide-prev",
        nextEl: "#side-next"
    }
});