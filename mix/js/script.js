$(function(){
    $('.gnb li').hover(function(){
        $('.lnb').stop().slideToggle();
        $('.nav-back').stop().slideToggle();
    });

    $('.lnb').hover(function(){
        $('.lnb').stop().slideToggle();
        $('.nav-back').stop().slideToggle();
    });

   //main pop slide

   setInterval(myslide,3000);
   
   function myslide(){
     $('.do-slide').animate({
       'left': '-210px'
     },3000, function(){
       $('.do-slide img:first-child')
       .clone().appendTo('.do-slide');
       $('.do-slide img:first-child').remove();
       $('.do-slide').css('left',0);
     })
   }

});//jquery


//main tab

$('.tab a').click(function(e){
  e.preventDefault();
  $('.tab a').removeClass('active');
  $(this).addClass('active');
  const myid = $(this).data("idx");
  $('.tab-content>div').removeClass('active');
  $(myid).addClass('active');
});

// 휴대폰 번호 자동으로 '-' 붙여주는 함수
$(function(){
    $('[type="date"]').prop('min', function(){
        return new Date().toJSON().split('T')[0];
    });
});

function oninputPhone(target) {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{4})([0-9]{4})/g, "$1-$2-$3");
}

$('.slide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    fadeSpeed: 3000,
    zIndex: 0
});

$('.play').on('click', function(){
    $('.slide').slick('slickPlay');
});

$('.pause').on('click', function(){
    $('.slide').slick('slickPause');
});
