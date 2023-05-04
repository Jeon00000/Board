$(function() {

    var $w = $(window),
      footerHei = $('footer').outerHeight(),
      $doctor = $('.pr-doctor');
  
    $w.on('scroll', function() {
  
      var sT = $w.scrollTop();
      var val = $(document).height() - $w.height() - footerHei;
  
      if (sT >= val)
        $doctor.addClass('on')
      else
              $doctor.removeClass('on')
      
  
  
    });
  
  
  });
  