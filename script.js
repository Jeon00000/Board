$(function(){
    $('.left-nav>ul li').hover(function(){
        $('.under-nav').stop().slideToggle(700);

    });
    
    filterSelection("total");

});//Jquery

function fadeInOut(){
    $('.slider img:eq(0)')
    .fadeOut(500).next()
    .fadeIn(500).end()
    .appendTo('.slider');
}

function filterSelection(c) {
    $(".filtert").removeClass("show");
    if (c == "total") {
      $(".filtert").addClass("show");
    } else {
      $(".filtert." + c).addClass("show");
    }
  }
  