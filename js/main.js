$(document).ready(function(){
  $('.form-container').hide();
  $('.register').on('click', () => {
    $('.form-container').slideToggle('fast');
  });

});
