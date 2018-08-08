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

var points = {};

$(document).ready(function() {
  $('section').each(function(item) {
    points[$(this).attr('id')] = $(this).offset().top
  });
});

$(window).on('wheel', function(event){
  event.preventDefault()

  if (event.originalEvent.deltaY === 1) {
    runSrollUp(event)
  } else if (event.originalEvent.deltaY === -1) {
    runScrollDown(event)
  }
})

function runSrollUp(event) {
  console.log(event);
  $('html, body').animate( { scrollTop: points.team }, 1000 );
  console.log('up');
}

function runScrollDown() {
  console.log(event);
  console.log('down');
}
