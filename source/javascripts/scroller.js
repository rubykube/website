import $ from 'jquery'

$(document).ready(function () {
  let section = $('.section-scroll');
  let pathScroll = 'up'; 
  let currentSection = 0;
  
  if($(window).width() > 992){
    $('.js-scrollTo').on('click', function(e) {
      e.preventDefault()

      if (location.pathname.substr(1) === "blog"){
        let page = $(this).attr('href');
        location.href = '../' + page;
      } else {
        let page = $(this).attr('href')
        $('html, body').animate({
          scrollTop: page ? $(page).offset().top : 0
        }, 500)

        if (page) {
          window.location.hash = page
        }
      }
    })

  $('section').each(function (i) {
    sections.push({
      id: $(this).attr('id'),
      offset: $(this).offset().top
    })

    if (location.pathname.substr(1) === "blog"){
      let page = $(this).attr('href');
      window.location.href = '/' + page;
    } else {
      let page = $(this).attr('href')
      $('html, body').animate({
        scrollTop: page ? $(page).offset().top : 0
      }, 500)

      if (page) {
        window.location.hash = page
      }
    }
  })

    $('section').each(function (i) {
      sections.push({
        id: $(this).attr('id'),
        offset: $(this).offset().top
      })

      if ($(this).attr('id') === window.location.hash) {
        currentSection = i
        setNavColor()
      }
    })

    $(window).on('wheel', function (event) {
      event.preventDefault()

      if (isScrolling) {
        clearTimeout(scrollTimeout)
      } else {
        isScrolling = true

        if (event.originalEvent.deltaY < 0) {
          prevSection()
        } else if (event.originalEvent.deltaY > 0) {
          nextSection()
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
  }
});