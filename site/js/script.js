const swiper1 = document.querySelector('.slider-container'),
	swiper2 = document.querySelector('.swiper-container'),
	burger = document.querySelector('.burger'),
	close = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu');



let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	loop: true,
	spaceBetween: 105,
	slidesPerView: 'auto',
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: 1,
	loop: true,
	navigation: {
		nextEl: ".main-slider__button-left",
		prevEl: ".main-slider__button-right",
	},
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});