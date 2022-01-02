$(document).ready(function () {
    $('#home-banner').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5500,
        smartSpeed: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
        },
    });

    $('#testi').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
        },
    });
});