$(function(){
    $('.gnb li').hover(function(){
        $('.lnb').stop().slideToggle();
        $('.nav-back').stop().slideToggle();
    });

    $('.lnb').hover(function(){
        $('.lnb').stop().slideToggle();
        $('.nav-back').stop().slideToggle();
    });

   

});//jquery

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