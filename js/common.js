$(document).ready(function(){

    $('.call-menu').on('click', function () {
        $('.header-bottom').addClass('nav-show');
    });

    $('.close-menu').on('click', function () {
        $('.header-bottom').removeClass('nav-show');
    });


    $('.call-question').on('click', function () {
        $('.blog-question').addClass('showed');
        $('.overlay').addClass('showed');
    });

    $('.overlay,.btn-cancel').on('click', function () {
        $('.question-popup').removeClass('showed');
        $('.overlay').removeClass('showed');
    });

    $('.call-application').on('click', function () {
        $('.control-question').addClass('showed');
        $('.overlay').addClass('showed');
        $('.header-bottom').removeClass('nav-show');
    });
    $('.call-app').on('click', function () {
        $('.control-app').addClass('showed');
        $('.overlay').addClass('showed');
    });
    $('.callback').on('click', function () {
        $('.callback-cover').addClass('showed');
        $('.overlay').addClass('showed');
    });
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();


});
$(function () {
    $('.call-answer').on('click', function () {
        var answer = $(this).next();
        $(this).closest('.answer-item').not(answer).slideUp(400);
        answer.slideToggle(400);
    });

});


//  Sertificate
$('.sert-cover').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

