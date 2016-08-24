jQuery(document).ready(function ($) {
    'use strict';

    // adjast header height
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(200);
        }
    });
    $('.top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })

    // active links
    // $('.links li a').click(function () {
    // });

    //bxslider

    $('.bxslider').bxSlider({
        pager: false
    });
    $('.bxslider').css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);



    $('.links li a').click(function () {
        $('html body').animate({
            scrollTop: $('#' + $(this).data('nav')).offset().top - 80
        }, 1000);
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // $('.underline:after').css(
    //        "width", $('.underline span').width()
    //    );

    $('.member').hover(function () {
            $(this).append('<div class=shadow>' + $(this).data('name') + '</div>');
            $('.shadow').fadeIn(1000);
        },
        function () {
            $('.shadow').fadeOut(1000).remove();
        });

    $('.project .items .item').hover(function () {
            $(this).append('<div class=shadow><a href="" class="view-more">View More</a><li class="like fa fa-heart">     14</li></div>');
            $('.shadow').fadeIn(1000);
        },
        function () {
            $('.shadow').fadeOut(1000).remove();
        });



    (function slider() {
        $(".slider .activeq").each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(5000).fadeOut(function () {
                    $(this).removeClass('activeq').next().addClass('activeq').fadeIn();
                    slider();
                });
            } else {

                $(this).delay(5000).fadeOut(function () {
                    $(this).fadeOut().removeClass('activeq');
                    $('.slider div:first-child').addClass('activeq').fadeIn();
                    slider();
                });
            }
        });
    }());

    $('.items').mixItUp();
    $("html").niceScroll({
        cursorborder: 'none'
    });


});