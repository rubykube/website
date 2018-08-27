$(document).ready(function() {
    $(window).scroll(function(){
      let currentclass
      $('section').each(function(){
         if($(this).offset().top<$(window).scrollTop()+20){
            currentclass =$(this).attr('id')
         }
      })

      if($('#sideNav').offset().top < 80) {
        $('#sideNav').addClass('red')
      } else {
        $('#sideNav').removeClass('red')
      }

      $('#sideNav').removeClass('about components features gallery technology releases tutorials blog team followus')
      $('#sideNav').addClass(currentclass)
    })
})