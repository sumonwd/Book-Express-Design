(function ($) {
    "use strict";

    // var for header_fix
    var $header = $('.bx_main_header');
    var $header_fix = 'header_fix';
    var $t_offset = $('.bx_main_header').offset().top;
    // script for header_fix
    $(window).scroll(function () {
        if ($(this).scrollTop() > $t_offset) {
            $header.addClass($header_fix);
            $header.next().css('paddingTop', $t_offset);
        } else {
            $header.removeClass($header_fix);
            $header.next().css('paddingTop', '0px');

        }
    });
    // script for mobile menu
    var $menu_bar = $('.bx_manubar');
    var $menu = $('.bx_menu');
    var $overlay = $("<div class='overlay'></div>");
    $('body').append($overlay);
    $overlay.hide();
    $menu_bar.on("click", function () {
        $menu.toggleClass('open');
        $menu_bar.children().toggleClass('close');
        $overlay.toggle();
    });
    $overlay.on("click", function () {
        $menu.removeClass('open');
        $menu_bar.children().removeClass('close');
        $overlay.hide();
    });

    // Banner slider
    $('.bx_banner_slider_content').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        smartSpeed:800,
        autoplayHoverPause: true,
        pagination:true,
        autoHeight:true,
        items: 1
    });
    // Popular author slider
    $('.bx_author_book_content').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        pagination:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: false,
                loop: true
            }
        }
    });
    // Sponsor slider
    $('.bx_sponsor_content').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        pagination:false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots:false,
                center: true,
            },
            600: {
                items: 3,
                nav: false,
                dots:false,
            },
            1000: {
                items: 6,
                nav: false,
                loop: true,
                dots:false,
            }
        }
    });
})(jQuery);