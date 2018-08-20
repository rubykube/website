$(document).ready(function(){
    $(window).scroll(function(){
        $('#about').each(function(){
            if($(this).offset().top<$(window).scrollTop()){
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
         })
   
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});