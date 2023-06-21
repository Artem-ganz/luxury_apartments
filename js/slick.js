$(document).ready(function() { 
    $('#first_screen').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        accessibility: true,
        arrows: false,
        // dots: true,
        swipe: true, 
        mobileFirst: true, 
    });

    $('.prodacts__cards').slick({
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
       
        responsive: [
            { 
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5, 
                } 
            },
            { 
                breakpoint: 1284,
                settings: {
                    slidesToShow: 4, 
                } 
            },
            { 
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, 
                } 
            },
            { 
                breakpoint: 500,
                settings: {
                    slidesToShow: 2, 
                    dots: true,
                    arrows: false,
                } 
            }, 
            { 
                breakpoint: 320,
                settings: {
                    slidesToShow: 1, 
                    dots: true,
                    arrows: false,
                } 
            }
        ]
    });


    $('.partners__block').slick({ 
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 3000,

        adaptiveHeight: true,
        accessibility: true,
        arrows: true, 
        swipe: true, 
        mobileFirst: true, 
    
        responsive: [
            { 
                breakpoint: 1400,
                settings: {
                    slidesToShow: 9, 
                } 
            },
            { 
                breakpoint: 1284,
                settings: {
                    slidesToShow: 7, 
                } 
            },
            { 
                breakpoint: 768,
                settings: {
                    slidesToShow: 5, 
                } 
            },
            { 
                breakpoint: 500,
                settings: {
                    slidesToShow: 4, 
                    dots: true,
                    arrows: false,
                } 
            }, 
            { 
                breakpoint: 320,
                settings: {
                    slidesToShow: 2, 
                    dots: true,
                    arrows: false,
                } 
            }
        ]
    });
});