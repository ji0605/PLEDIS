$(function () {

    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct > 0) {
            $('.header').addClass('on')
        }else {
            $('.header').removeClass('on')
        }
    });


    $('.main_visual_slide').slick({
        arrows: false,
        dots:false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        useTransform: false
    
    })

    $('.main_product_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '300px',
        arrows: false,
        draggable:false,
    });

    $('.main_content_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '230px',
        arrows: false,
    });

    
    $('.main_product .arrows .prev').on('click' , function () {
        $('.main_product_slide').slick('slickPrev')
        
    });

    $('.main_product .arrows .next').on('click' , function () {
        $('.main_product_slide').slick('slickNext')
    });


    $('.main_content_slide').on('inft afterChange', function(s,e,c){
        console.log(s,e,c);
        $('.con')
        .eq(c)
        .addClass('on')
        .siblings()
        .removeClass('on')

        const current = $('.main_content_slide .slick-center.slick-active').prev();

        current
        .addClass('on')
        .siblings()
        .removeClass('on');
        $('.main_content').css({
            backgroundImage: 'url(./images/bg_0' + ( c ? c + 1 : 1 ) + '.png)'
        })
    });

    $('.main_content .arrows .prev').on('click' , function () {
        $('.main_content_slide').slick('slickPrev')
        
    });

    $('.main_content .arrows .next').on('click' , function () {
        $('.main_content_slide').slick('slickNext')
    });


    


      



    
})