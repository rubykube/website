$(document).ready(function(){
    $(window).scroll(function(){
        if($('#about') ) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


//&& $(window).width() > '932'