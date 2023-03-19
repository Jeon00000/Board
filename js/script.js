$(function(){
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
});//jquery

$('.tab a').click(function(e){
  e.preventDefault();
  $('.tab a').removeClass('active');
  $(this).addClass('active');
  const myid = $(this).data("idx");
  $('.tab-content>div').removeClass('active');
  $(myid).addClass('active');
})

