$(document).ready(function(){

  $('#carouselSlide').carousel({ 
    interval: 2000
  });

  $('#carouselSlide').on('slide.bs.carousel', function (e) {
    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 4;
    let totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
      }
  });

  $(".carouselSwipe").carousel({
    swipe: 30
  });
  
});
