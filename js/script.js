$(function () {
    "use strict";

    /* ========================================================================================================
        Todo: banner part
            * Slick slider activation code
    ========================================================================================================= */
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        prevArrow: '<i class="fa-solid fa-angle-left prev_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right next_arrow"></i>'
    });
})