$(document).ready(function(){
  $('.form-container').hide();
  $('.register').on('click', () => {
    $('.form-container').slideToggle('fast');
  });

  $('nav').prepend('<div id="responsive-nav" style="display:none">Menu</div>');
  $('#responsive-nav').on('click',function(){
  $('nav ul').slideToggle()
});

});
