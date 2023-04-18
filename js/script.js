$(function(){

    //banner slide
    $('.left-nav>ul li').hover(function(){
        $('.under-nav').stop().slideToggle(700);

    });
    
    //main pop slide

    setInterval(myslide,3000);
    function myslide(){
      $('.slide').animate({
        'left': '-210px'
      },500, function(){
        $('.slide img:first-child')
        .clone().appendTo('.slide');
        $('.slide img:first-child').remove();
        $('.slide').css('left',0);
      })
    }
    

});//Jquery

function fadeInOut(){
    $('.slider img:eq(0)')
    .fadeOut(500).next()
    .fadeIn(500).end()
    .appendTo('.slider');
}

//main tab

$('.tab a').click(function(e){
    e.preventDefault();
    $('.tab a').removeClass('active');
    $(this).addClass('active');
    const myid = $(this).data("idx");
    $('.tab-content>div').removeClass('active');
    $(myid).addClass('active');
  })
  