import $ from 'jquery'

$(document).ready(function () {
  let section = $('.section-scroll');
  let pathScroll = 'up'; 
  let currentSection = 0;
  $(document.body).on('DOMMouseScroll mousewheel', function (e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        pathScroll = 'down';
      } else {
        pathScroll = 'up';
      }

      currentSection = -1;
      section.each(function(i){
          if (currentSection<0 && ($(this).offset().top >= $(window).scrollTop())) {
            currentSection = i;
          }
      });
      if (pathScroll == 'up' && currentSection > 0) {
        currentSection--;
      }
      if (pathScroll == 'down' && currentSection < section.length) {
        currentSection++;
      }

      $('html,body').stop().animate({
          scrollTop: section.eq(currentSection).offset().top
      }, 600);
      return false;
  });
  $(window).resize(function () {
      $('html,body').scrollTop(section.eq(currentSection).offset().top);
  });
});
