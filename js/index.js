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