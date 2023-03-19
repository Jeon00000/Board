$(function(){
    $('.left-nav>ul li').hover(function(){
        $('.under-nav').stop().slideToggle(700);

    });
    
    

});//Jquery

function fadeInOut(){
    $('.slider img:eq(0)')
    .fadeOut(500).next()
    .fadeIn(500).end()
    .appendTo('.slider');
}
