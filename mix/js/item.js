$(function(){

    filterSelection("total");

});//Jquery

function filterSelection(c) {
    $(".filtert").removeClass("show");
    if (c == "total") {
      $(".filtert").addClass("show");
    } else {
      $(".filtert." + c).addClass("show");
    }
  }