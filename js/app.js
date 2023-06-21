//Menu burger
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}


// Анимация header
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    //настройка скрола(скорость)
    smooth: 1.5,
    //можем управлять эфектами(скорость, замедлять,лег)
    effects: true,
})
// чтоб пропадал header
gsap.fromTo('.header', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.header',
        start: 'center',
        end: '850',
        scrub: true
    }
})


// Появление колонок с разных сторон
let itemsL = gsap.utils.toArray('.gallery-left .gallery-item')

itemsL.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: -100 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})


let itemsR = gsap.utils.toArray('.gallery-right .gallery-item')

itemsR.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: 100 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-750',
			end: 'top',
			scrub: true
		}
	})
})


// Слайдер 
const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,

	lazyLoad: true,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	accessibility: true,
	arrows: true, 
	swipe: true, 
	mobileFirst: true,
	
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});


// Слайдер для коментарьев
const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: '.slider-reviews-next',
		prevEl: '.slider-reviews-prev',
	},
});


// Переключение картинок
const galleryItems = document.querySelectorAll(".gall__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1, 
			autoplay: {
				delay: 4000,
			},
			effect: 'fade',
		})
	})
}


// Акардеон секции
let btnRandom4 = document.querySelectorAll('.btn-exemlpe1');

for (let i = 0; i < btnRandom4.length; i++) {
  btnRandom4[i].onclick = () => {
    btnRandom4[i].classList.toggle('acord-open')
  }
}

// console.log(btnRandom4[0]);


// Кнопка скрола вверх
function backToTop () {
	let button = $('.back-to-top')
	$(window).on('scroll', () => {
		if($(this).scrollTop() >= 950) {
			button.fadeIn()
		} else {
			button.fadeOut()
		}
	})

	button.on('click', (e) => {
		e.preventDefault()
		$('html').animate({scrollTop: 0}, 1500)
	})
}

backToTop()




