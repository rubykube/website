$(document).ready(function() {
  $('.js-scrollTo').on('click', function() {
    var page = $(this).attr('href');
    var speed = 500;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    $('#sideNav').removeClass('red yellow green');
    $('#sideNav').addClass('blue');
    return false;
  });
});
