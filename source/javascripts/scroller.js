import $ from 'jquery'

$('.js-scrollTo').on('click', function(e) {
  e.preventDefault()

  let page = $(this).attr('href');

  $('html, body').animate( { scrollTop: $(page).offset().top }, 500 );
  $('#sideNav').removeClass('red yellow green');
  $('#sideNav').addClass('blue');

  window.location.hash = page

  // return false
});

$('body').scrollspy({ target: '.nav' })

$('.js-scrollTo').on('activate.bs.scrollspy', function() {
  console.log('kek')
})

function onLogoHover (e) {
  console.log('hover')
}

$('#logo').on('hover', onLogoHover)

// window.onload = init
