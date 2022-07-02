// import Swiper bundle with all modules installed
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';


new Swiper('.swiper', {
    modules: [Navigation, Pagination, Parallax, Autoplay],
    autoplay: {
        delay: 5000,
    },
    speed: 600,
    parallax: true,
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});