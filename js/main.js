$(document).ready(function(){
  $('.form-container').hide();
  $('.register').on('click', () => {
    $('.form-container').slideToggle('fast');
  });

  $('nav').prepend('<div id="responsive-nav" style="display:none">Menu</div>');
  $('#responsive-nav').on('click',function(){
    $('nav ul').slideToggle()
  });

  $(window).resize(function(){

    if ($(window).innerWidth() < 768) {
      $('nav ul li').css('display','block');
      $('nav ul').hide()
      $('#responsive-nav').show()
    } else {
      $('nav ul li').css('display','inline-block');
      $('nav ul').show()
      $('#responsive-nav').hide()
    }

  });

  $(window).resize();

});
