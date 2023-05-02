$(function(){
    $('#gnb-a').hover(function(){
        $(this).find('.lnb-a').stop().slideToggle();
    })
    $('#gnb-b').hover(function(){
        $(this).find('.lnb-b').stop().slideToggle();
    })

    // part-item
    $('.part-item').mouseenter(function(){
        $(this).find('.part-hover').stop().fadeIn();
    })
    $('.part-item').mouseleave(function(){
        $(this).find('.part-hover').stop().fadeOut();
    })
});

// part json
