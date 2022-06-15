$('.header__open-menu').click(function() {
    $('.header__open-menu').click(function() {
        $('.header__mobile-menu').slideDown(300);
        $('.header__open-menu').hide();
        $('.header__close-menu').show();
    })
    $('.header__close-menu').click(function() {
        $('.header__mobile-menu').slideUp(300);
        $('.header__close-menu').hide();
        $('.header__open-menu').show();
    })
});

if (window.innerWidth >= 768) {
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 2,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            autoplaySpeed: 2000,
            pagination: false,
            dots: true,
            nav: false,
        });
    });
}

if (window.innerWidth < 768) {
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            autoplaySpeed: 4000,
            pagination: false,
            dots: true,
            nav: false,
        });
    });
}